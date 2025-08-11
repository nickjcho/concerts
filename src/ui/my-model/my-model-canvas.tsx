'use client';

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MyModel from "./my-model";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";

const MyModelCanvas = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 4.8]}
        rotation={[0, 0, 0]}
      />
      <ambientLight intensity={1} />
      <directionalLight intensity={2.5} position={[5, 1, 7]} />
      <MyModel 
        position={[0, 0, 0]} 
        rotation={[0, -Math.PI / 2, 0]}
      />
      
      <EffectComposer>
        <HueSaturation saturation={0.4} />
      </EffectComposer>
    </Canvas>
  )
};

export default MyModelCanvas;