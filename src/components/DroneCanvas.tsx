import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Drone3D from './Drone3D';

const DroneCanvas = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[6, 3, 6]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <pointLight position={[0, 5, 0]} intensity={0.5} />

          <Environment preset="sunset" />

          {/* Main drone */}
          <Drone3D position={[0, 0, 0]} scale={0.8} delay={0} />

          {/* Formation drones */}
          <Drone3D position={[-2.5, 0.3, -1]} scale={0.5} delay={0.5} />
          <Drone3D position={[2.5, 0.3, -1]} scale={0.5} delay={1} />
          <Drone3D position={[0, 0.5, -2]} scale={0.4} delay={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DroneCanvas;
