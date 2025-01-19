'use client';

import { useRef } from 'react';
import fragment from './fragment.frag';
import vertex from './vertex.vert';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, ShaderMaterial } from 'three';

function GradientMesh() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;

      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uScroll.value = window.scrollY;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[10000, 10000]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uColor1: { value: [251 / 255, 251 / 255, 251 / 255] },
          uColor2: { value: [221 / 255, 221 / 255, 221 / 255] },
        }}
      />
    </mesh>
  );
}

export default function GradientBackground() {
  return (
    <Canvas>
      <GradientMesh />
    </Canvas>
  );
}
