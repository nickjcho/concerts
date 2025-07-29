import { useEffect, useState } from "react";

const Ellipses = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span>{dots}</span>;
};

export default Ellipses;