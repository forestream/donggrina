import Image from 'next/image';
import styles from './diary-images.module.scss';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

interface DiaryImagesProps {
  images: string[];
}

export default function DiaryImages({ images }: DiaryImagesProps) {
  const [mouseDown, setMouseDown] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const handleMouseDown: MouseEventHandler = (e) => {
    e.preventDefault();
    setMouseDown(true);
    setOffsetX(e.clientX);
    ref.current && ref.current.classList.add(styles.pauseAlign);
  };
  const handleMouseMove: MouseEventHandler = (e) => {
    if (!mouseDown || !ref.current) return;

    ref.current.scrollLeft -= e.movementX;
  };
  const handleMouseUp: MouseEventHandler = (e) => {
    setMouseDown(false);

    ref.current && ref.current.classList.remove(styles.pauseAlign);
  };

  useEffect(() => {
    if (!ref.current) return;
    document.body.addEventListener('mousemove', handleMouseMove as unknown as EventListenerOrEventListenerObject);
    document.body.addEventListener('mouseup', handleMouseUp as unknown as EventListenerOrEventListenerObject);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove as unknown as EventListenerOrEventListenerObject);
      document.body.removeEventListener('mouseup', handleMouseUp as unknown as EventListenerOrEventListenerObject);
    };
  }, [mouseDown, offsetX]);

  return (
    <section ref={ref} onMouseDown={handleMouseDown} className={styles.imagesContainer}>
      {images.map((image, i) => (
        <div key={i} className={styles.image}>
          <Image src={image} alt="다이어리 사진" fill />
        </div>
      ))}
    </section>
  );
}
