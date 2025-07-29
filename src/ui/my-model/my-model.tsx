import { useBlabContext } from "@/context/blabContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const MyModel = (props: ThreeElements['mesh']) => {
  const group = useRef(null);
  const { nodes, scene, animations } = useGLTF('/minimeV2_2.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const { shouldBlab } = useBlabContext();
  console.log(actions);
  console.log(nodes);

  useFrame(() => {
    if (shouldBlab) {
      setInterval(() => {
        nodes.mouth001.visible = !nodes.mouth001.visible;
        nodes.closed_mouth001.visible = !nodes.closed_mouth001.visible;
      }, 1500)
    } else {
      nodes.mouth001.visible = false;
      nodes.closed_mouth001.visible = true;    
    }
  });

  useEffect(() => {
    actions['bodyBounce']?.play();
    actions['headBounce']?.play();
    actions['handsBounce']?.play();
    nodes.closed_eyes001.visible = false;
    nodes.mouth001.visible = false;
  }, [actions, nodes, mixer]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <primitive ref={group} object={scene} {...props} />
  )
}

export default MyModel;
