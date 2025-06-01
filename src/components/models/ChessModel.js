import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export const ChessModel = () => {
  const { scene } = useGLTF('/models/chess/scene.gltf');

  return (
    <Canvas
      style={{ height: '500px', width: '100%' }}
      camera={{ position: [-90, 80, 50], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={3.5} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        rotateSpeed={1} 
      />
    </Canvas>
  );
};
