import { useEffect, useState } from 'react';

export default function usePullReload() {
  const [pullDownDistance, setPullDownDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    let distance = 0;
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartY(e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const currentY = e.clientY;
        distance = currentY - startY;
        if (distance < 0) distance = 0;
        if (distance > 200) distance = 200; // 최대 높이를 200px로 제한
        setPullDownDistance(distance);
      }
    };

    const handleMouseUp = () => {
      if (distance > 50) {
        window.location.reload();
      }
      setIsDragging(false);
      setPullDownDistance(0); // 마우스를 놓으면 여백을 초기화
    };

    // 이벤트 리스너 등록
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY]);

  return pullDownDistance;
}
