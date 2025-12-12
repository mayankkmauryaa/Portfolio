import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface StarFieldProps {
  count?: number;
  mousePosition: { x: number; y: number };
  darkMode: boolean;
}

function StarField({ count = 1500, mousePosition, darkMode }: StarFieldProps) {
  const ref = useRef<THREE.Points>(null);

  // Generate random positions for stars
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 50;     // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the entire field slowly
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;

      // Parallax effect based on mouse
      const targetX = mousePosition.x * 0.5;
      const targetY = mousePosition.y * 0.5;

      ref.current.position.x += (targetX - ref.current.position.x) * 2 * delta;
      ref.current.position.y += (targetY - ref.current.position.y) * 2 * delta;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={darkMode ? "#ffffff" : "#2563eb"}
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={darkMode ? 0.6 : 0.4}
        />
      </Points>
    </group>
  );
}

export function ThreeScene({ mousePosition, darkMode }: { mousePosition: { x: number; y: number }; darkMode: boolean }) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <StarField mousePosition={mousePosition} darkMode={darkMode} />
      </Canvas>
    </div>
  );
}