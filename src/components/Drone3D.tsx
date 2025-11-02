import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface Drone3DProps {
  position?: [number, number, number];
  scale?: number;
  delay?: number;
}

const Drone3D = ({ position = [0, 0, 0], scale = 1, delay = 0 }: Drone3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const propellerRefs = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ];

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation with delay
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.1;
    }

    // Spin propellers
    propellerRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += 0.5;
      }
    });
  });

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]} scale={scale}>
      {/* Main body */}
      <Box args={[1.5, 0.3, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0EA5E9" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Camera */}
      <Sphere args={[0.3, 16, 16]} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.1} />
      </Sphere>

      {/* Arms */}
      {[
        { pos: [0.6, 0, 0.6], rot: [0, Math.PI / 4, 0] },
        { pos: [-0.6, 0, 0.6], rot: [0, -Math.PI / 4, 0] },
        { pos: [0.6, 0, -0.6], rot: [0, -Math.PI / 4, 0] },
        { pos: [-0.6, 0, -0.6], rot: [0, Math.PI / 4, 0] },
      ].map((arm, i) => (
        <group key={i} position={arm.pos as [number, number, number]} rotation={arm.rot as [number, number, number]}>
          <Cylinder args={[0.08, 0.08, 0.8]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#1E293B" metalness={0.7} roughness={0.3} />
          </Cylinder>
        </group>
      ))}

      {/* Propellers */}
      {[
        [0.9, 0.2, 0.9],
        [-0.9, 0.2, 0.9],
        [0.9, 0.2, -0.9],
        [-0.9, 0.2, -0.9],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Motor */}
          <Cylinder args={[0.12, 0.12, 0.15]}>
            <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
          </Cylinder>
          {/* Propeller blades */}
          <mesh ref={propellerRefs[i]} position={[0, 0.1, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.1]} />
            <meshStandardMaterial color="#64748B" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh ref={propellerRefs[i]} position={[0, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.1]} />
            <meshStandardMaterial color="#64748B" metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* LED lights */}
      {[
        [0.6, -0.1, 0.6],
        [-0.6, -0.1, 0.6],
      ].map((pos, i) => (
        <Sphere key={i} args={[0.05, 8, 8]} position={pos as [number, number, number]}>
          <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={2} />
        </Sphere>
      ))}
      {[
        [0.6, -0.1, -0.6],
        [-0.6, -0.1, -0.6],
      ].map((pos, i) => (
        <Sphere key={i + 2} args={[0.05, 8, 8]} position={pos as [number, number, number]}>
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={2} />
        </Sphere>
      ))}
    </group>
  );
};

export default Drone3D;
