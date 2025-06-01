import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei';

export const PcModel = () => {
  const { scene } = useGLTF('/models/pc/scene.gltf');

  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [40, 10, 40], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
    
      <Suspense fallback={null}>
        {/* Bounds va automatiquement centrer et zoomer sur ce qui est à l'intérieur */}
        <Bounds fit margin={1.2}>
          <primitive 
            object={scene} 
            scale={0.5}  // Ici tu peux ajuster la scale si besoin
            position={[0, 0, 0]}
          />
        </Bounds>
      </Suspense>

      <OrbitControls
        enableZoom={false}       // Désactive zoom manuel
        enablePan={false}        // Désactive déplacement manuel
        autoRotate               // Rotation automatique activée
        autoRotateSpeed={1}      // Vitesse de rotation auto
        rotateSpeed={1}          // Vitesse rotation manuelle
      />
    </Canvas>
  );
};
