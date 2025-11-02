import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Drone3D from './Drone3D';

const DroneCanvas = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[4, 2, 4]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <pointLight position={[0, 5, 0]} intensity={0.5} />

          <Environment preset="sunset" />

          <Drone3D />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DroneCanvas;
