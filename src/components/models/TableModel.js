import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei';

export const TableModel = () => {
  const { scene } = useGLTF('/models/table/scene.gltf');

  if (!scene) {
    return <div>Loading model...</div>;
  }

  console.log('Model loaded:', scene);

  return (
    <Canvas style={{ height: 150, width: 150 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <primitive object={scene} />
        </Bounds>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};
