import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Posição atual do mouse
  const mousePos = useRef({ x: 0, y: 0 });
  // Posição atual do blob (com atraso suave)
  const blobPos = useRef({ x: 0, y: 0 });
  // Posição atual do dot (com atraso menor)
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Animação suave usando requestAnimationFrame
    const animate = () => {
      // Lerp (interpolação linear) para movimento suave
      // Blob se move mais devagar (0.08) para efeito de "arrasto"
      blobPos.current.x += (mousePos.current.x - blobPos.current.x) * 0.06;
      blobPos.current.y += (mousePos.current.y - blobPos.current.y) * 0.06;

      // Dot se move mais rápido (0.25) para seguir mais de perto
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${blobPos.current.x}px, ${blobPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Iniciar animação
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Cursor blob principal - grande e suave */}
      <div
        ref={blobRef}
        className="custom-cursor-blob"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Cursor dot central - pequeno e preciso */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
