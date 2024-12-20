void main() {
  // vertexシェーダーをいっぱいかく
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}