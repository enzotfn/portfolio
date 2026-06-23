import { useState, useEffect, useRef, useCallback } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef(null);

  // Smooth lerp animation loop for the follower
  const animate = useCallback(() => {
    const speed = 0.12; // lower = smoother & more lag, higher = snappier
    followerPos.current.x += (pos.current.x - followerPos.current.x) * speed;
    followerPos.current.y += (pos.current.y - followerPos.current.y) * speed;

    if (followerRef.current) {
      followerRef.current.style.transform = `translate(${followerPos.current.x - 18}px, ${followerPos.current.y - 18}px)`;
    }
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    // Start the animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div
        ref={followerRef}
        className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
      />
    </>
  );
}
