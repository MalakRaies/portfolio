import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import colorSharp from "../assets/img/color-sharp.png";
import { KnightModel } from './models/KnightModel';

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import java from "../assets/tech/java.svg";
import android from "../assets/tech/android.jpg";
import python from "../assets/tech/Python.png";
import c from "../assets/tech/c.png";
import reactjs from "../assets/tech/reactjs.png";
import springboot from "../assets/tech/springboot.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";


// Composant Ball avec gestion d'erreur améliorée
const Ball = ({ imgUrl }) => {
  try {
    const texture = useTexture(imgUrl ? [imgUrl] : ['']);
    const decal = texture[0];
    
    if (!imgUrl || !decal) {
      return (
        <mesh scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
      );
    }

    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    );
  } catch (error) {
    console.error('Error rendering Ball:', error);
    return (
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    );
  }
};

// Composant de chargement
const LoadingBall = () => (
  <mesh scale={2.75}>
    <icosahedronGeometry args={[1, 1]} />
    <meshStandardMaterial color="#cccccc" />
  </mesh>
);

// Composant de fallback en cas d'erreur
const FallbackBall = () => (
  <mesh scale={2.75}>
    <icosahedronGeometry args={[1, 1]} />
    <meshStandardMaterial color="#ff0000" />
  </mesh>
);

// Boundary d'erreur
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in 3D component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Composant BallCanvas avec gestion d'erreur
const BallCanvas = ({ icon }) => {
  if (!icon) {
    return (
      <div style={{ width: '100%', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>Icon missing</div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.localClippingEnabled = true;
      }}
    >
      <ErrorBoundary fallback={<FallbackBall />}>
        <Suspense fallback={<LoadingBall />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </ErrorBoundary>
    </Canvas>
  );
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // Liste des technologies avec vérification
  const technologies = [
    { name: "Android", icon: android },
    { name: "SpringBoot", icon: springboot },
    { name: "ReactJs", icon: reactjs },
    { name: "NodeJs", icon: nodejs },
  ].filter(tech => {
    if (!tech.icon) {
      console.warn(`Icon missing for ${tech.name}`);
      return false;
    }
    return true;
  });

  return (
    <section className="skill" id="skills" style={{ position: 'relative', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx text-center">
              <div className="skill-header mb-4">
                <h2>Skills</h2>
                <div className="knight-wrapper mb-3">
                  <div className="knight-container" style={{ height: '200px' }}>
                    <KnightModel />
                  </div>
                </div>
              </div>
              <p>
                Every skill is a strategic move on the board, carefully honed to build strong, winning solutions.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
              >
                {technologies.map((tech, index) => (
                  <div className="item" key={index}>
                    <div className="skill-model-container" style={{ width: '100%', height: '80px' }}>
                      <BallCanvas icon={tech.icon} />
                    </div>
                    <h3>{tech.name}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
        style={{ position: 'absolute', left: 0, bottom: 0, zIndex: -1, maxWidth: '300px' }}
      />
    </section>
  );
};