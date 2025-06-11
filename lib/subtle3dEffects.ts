export function subtle3dEffect(event: React.MouseEvent<HTMLElement>) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const diffX = (centerX - x) / centerX;
  const diffY = (centerY - y) / centerY;

  const target = event.currentTarget as HTMLElement;

  target.style.transform = `perspective(500px) rotateX(${
    diffY * -4
  }deg) rotateY(${diffX * 4}deg) translateZ(20px) translateX(${
    diffX * 4
  }px) translateY(${diffY * 4}px)`;
  // higher brightness on specific angle
  // target.style.filter = `brightness(${
  //   1.4 - (Math.abs(diffX + diffY - 0.5) / 2.5) * 0.4
  // })`;
}

export function abort3dEffect(event: React.MouseEvent<HTMLElement>) {
  const target = event.currentTarget as HTMLElement;
  target.style.transform = '';
  target.style.filter = '';
}
