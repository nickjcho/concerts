'use client';
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GridHelper } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import dynamic from "next/dynamic";

const ScrollingGrid = () => {
    const gridRef = useRef<GridHelper>(null);

    // Animate grid position to move forward (simulate moving toward horizon)
    useFrame(({ clock }) => {
      if (gridRef.current) {
        const time = clock.getElapsedTime();
        // Move grid along z axis to simulate forward motion
        gridRef.current.position.y = (time * 3) % 30;  
      }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[150, 50, "#ccc", "#ccc"]}
      rotation={[-Math.PI / 2, 0, 0]} // Rotate grid flat on X axis
      position={[0, 0, 0]}
    />
  );
}

const GridBackgroundInternal = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: "#f5efef",
        pointerEvents: 'none'
      }}
      shadows={false}
      gl={{ antialias: true }}
    >
      {/* Camera with manual control */}
      <PerspectiveCamera
        makeDefault
        position={[0, -25, 20]} // Positioned above and behind the grid
        fov={50}               // Field of view in degrees, controls zoom level
        near={0.1}             // Near clipping plane — anything closer won’t render
        far={200}
        rotation={[1.2, 0, 0]}
      />

      {/* Ambient light brightens everything uniformly */}
      <ambientLight intensity={0.5} />

      {/* Directional light simulates sunlight coming from above */}
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <fog attach="fog" args={["#f5efef", 50, 80]} />

      {/* The animated grid */}
      <ScrollingGrid />
    </Canvas>
  );
}

const GridBackground = dynamic(() => Promise.resolve(GridBackgroundInternal), {
  ssr: false,
});

export default GridBackground;