import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export const KnightModel = () => {
  const { scene } = useGLTF('/models/knight/scene.gltf');

  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [0, 0, 100], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <primitive 
          object={scene} 
          scale={7}
          position={[0, 0, 0]} // Ajustez selon vos besoins
        />
      </Suspense>
      <OrbitControls
        enableZoom={false} // Désactive le zoom
        enablePan={false} // Désactive le déplacement
        autoRotate // Active la rotation automatique
        autoRotateSpeed={1} // Vitesse de rotation automatique
        rotateSpeed={1} // Vitesse de rotation manuelle
      />
    </Canvas>
  );
};