import { QueryClient } from '@tanstack/react-query';
import { RefObject, useEffect, useState } from 'react';

interface UsePullReloadProps {
  queryClient: QueryClient;
  containerRef: RefObject<HTMLDivElement>;
}

export default function usePullReload({ queryClient, containerRef }: UsePullReloadProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let isDragging = false;
    let startY = 0;
    let distance = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        isDragging = true;
        startY = e.clientY;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const currentY = e.clientY;
        distance = currentY - startY;
        if (distance < 0) distance = 0;
        if (distance > 80) {
          distance = 80;
          setVisible(true);
        } // 최대 높이를 200px로 제한
        if (containerRef.current) {
          containerRef.current.style.setProperty('padding-top', `${distance}px`);
        }
      }
    };

    const handleMouseUp = () => {
      if (distance > 80) {
        queryClient.invalidateQueries();
      }
      isDragging = false;
      distance = 0;
      if (containerRef.current) {
        containerRef.current.style.setProperty('padding-top', `0px`);
        setVisible(false);
      }
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
  }, [queryClient, containerRef]);
  return visible;
}
