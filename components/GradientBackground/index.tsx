"use client";

import { useRef } from "react";
import fragment from "./fragment.glsl";
import vertex from "./vertex.glsl";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function GradientMesh() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current)
      (mesh.current.material as any).uniforms.uTime.value =
        clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[10000, 10000]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{
          uTime: { value: 0 },
          uColor1: { value: [241 / 255, 241 / 255, 241 / 255] },
          uColor2: { value: [245 / 255, 245 / 255, 245 / 255] },
          uColor3: { value: [251 / 255, 251 / 255, 251 / 255] },
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
