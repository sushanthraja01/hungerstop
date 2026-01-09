import React, { useEffect, useRef, useState } from 'react';
import { api_path, cldname } from '../helper/Api_path';

const Slidinghotels = () => {
  const [hil, setHil] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  
  const geth = async () => {
    try {
      const response = await fetch(`${api_path}firm/geth`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      const res = await response.json();
      if (response.ok && Array.isArray(res)) {
        setHil(res.map(h => `${cldname}${h.image}`));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    geth();
  }, []);

  
  useEffect(() => {
    if (hil.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % hil.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hil,currentIndex]);

  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const imgWidth = container.offsetWidth;
    container.scrollTo({
      left: currentIndex * imgWidth,
      behavior: 'smooth'
    });
  }, [currentIndex]);

  return (
    <div className='h-[300px] w-[90%] ml-[5%] sm:h-[500px] sm:ml-[10%] sm:w-[80%] flex flex-col justify-center items-center'>
      <div 
        ref={containerRef} 
        className='bg-black h-[90%] w-[100%] rounded-3xl flex overflow-hidden'
      >
        {hil.map((h, idx) => (
          <img 
            key={idx} 
            className='h-[100%] w-[100%] flex-shrink-0 rounded-3xl object-cover' 
            src={h} 
            alt={`hotel-${idx}`} 
          />
        ))}
      </div>

      <div className='flex mt-4 space-x-2 relative -top-10'>
        {hil.map((_, idx) => (
          <span 
            key={idx} 
            className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white border-2 border-black' : 'bg-transparent border-2 border-white'}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slidinghotels;
