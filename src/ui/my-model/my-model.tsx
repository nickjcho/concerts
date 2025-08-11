'use client';

import { RootState } from "@/storage/store";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Mesh } from "three";

const MyModel = (props: ThreeElements['mesh']) => {
  const group = useRef(null);
  const shadowRef = useRef<Mesh>(null);
  const frameCount = useRef(0);
  const { nodes, scene, animations } = useGLTF('/minimeV2_2.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const shouldBlab = useSelector((state: RootState) => state.blab.shouldBlab);
  const [animationStart, setAnimationStart] = useState<number | null>(null);
  const { clock } = useThree();

  useFrame(() => {
    frameCount.current++
    // Trigger mouth moving every 4 frames
    if (shouldBlab && frameCount.current % 4 === 0) {
      nodes.mouth001.visible = !nodes.mouth001.visible;
      nodes.closed_mouth001.visible = !nodes.closed_mouth001.visible;
    } else if (!shouldBlab) {
      nodes.mouth001.visible = false;
      nodes.closed_mouth001.visible = true;    
    }

    if (animationStart === null) return

    const loopDuration = 1.75 // 42 frames at 24 fps
    const elapsed = clock.getElapsedTime() - animationStart
    const t = (elapsed % loopDuration) / loopDuration

    const scale = 0.8 + Math.sin((t * Math.PI * 2) - Math.PI / 2) * 0.2
    if (shadowRef.current) {
      shadowRef.current.scale.set(scale, scale, 1)
    }
  });

  useEffect(() => {
    actions['bodyBounce']?.play();
    actions['headBounce']?.play();
    actions['handsBounce']?.play();
    nodes.closed_eyes001.visible = false;
    nodes.mouth001.visible = false;
    setAnimationStart(clock.getElapsedTime())
  }, [actions, nodes, mixer, clock]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Eye blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      nodes.closed_eyes001.visible = true;
      nodes.eyes001.visible = false;

      timeoutRef.current = setTimeout(() => {
        nodes.closed_eyes001.visible = false;
        nodes.eyes001.visible = true;
      }, 200);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    };
  }, [nodes]);

  return (
    <>
      <primitive ref={group} object={scene} {...props} />
      <mesh
        ref={shadowRef}
        rotation={[270 * (Math.PI / 180), 0, 0]}
        position={[0, -2, 0]} // Slightly above ground to prevent z-fighting
      >
        <circleGeometry args={[0.25, 32]} />
        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

export default MyModel;
