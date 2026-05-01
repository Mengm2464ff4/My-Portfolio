import { useEffect, useState } from 'react';

export const useMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    link: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#8b5cf6",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("default");
  
  // យើងកំពុងផ្តល់ data + functions ឲ្យ component ខាងក្រៅប្រើ”
  return { variants, cursorVariant, textEnter, textLeave, linkEnter, linkLeave };
};