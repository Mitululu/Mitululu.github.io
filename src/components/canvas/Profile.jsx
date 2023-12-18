import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from '../Loader';
import { profile } from '../../assets';
import { Vector3 } from "three";

const Profile = () => {
  const [profileTexture] = useTexture([profile]);

  return (
    <>
      <Float speed={5} rotationIntensity={10}>
        <ambientLight />
        <directionalLight intensity={2.0} position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={1}>
          <torusGeometry args={[2.3, 0.3, 16, 100]} />
          <meshStandardMaterial color='#915eff' />
        </mesh>
      </Float>
      <mesh >
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshBasicMaterial map={profileTexture} />
      </mesh>
    </>
  );
}

const ProfileCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, -5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={-Math.PI}
        />
        <Profile />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default ProfileCanvas;