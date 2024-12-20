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
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <planeGeometry args={[10000, 10000]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{ uTime: { value: 0 } }}
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
