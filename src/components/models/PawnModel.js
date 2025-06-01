import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/pawn/scene.gltf');
  return <primitive object={scene} scale={18} position={[0, 0, 0]} />;
}

export const PawnModel = () => {
  return (
    <div style={{ height: '200px', width: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 100], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={<FallbackComponent />}>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          rotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

const FallbackComponent = () => (
  <mesh>
    <boxGeometry args={[10, 10, 10]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
);