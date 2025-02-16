'use client'
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Revant Himmatsinghka",
    age: "32",
    title: "Influencer, Change Maker",
    text: "The best thing about the ring is that I don't have to remember to charge it. Charge it once and it easily lasts 8-10 days and the metrics are pretty accurate.",
    image: "/revant.png",
  },
  {
    id: 2,
    name: "Bandagee Kalra",
    age: "31",
    title: "Entrepreneur, Creator",
    text: "If you're someone who hates wearing fitness watches to sleep, then you must get HART ring. I've been sleeping better because I can finally wear a tracker while sleeping!",
    image: "/banda.png",
  },
  {
    id: 3,
    name: "Puja Tomar",
    age: "24",
    title: "UFC fighter",
    text: "I've been using the HART ring to track my activity and recovery primarily. As an athlete, it helps me give very good insights about my RHR and my VO2max which helps me to push myself further",
    image: "/puja.png",
  },
  {
    id: 4,
    name: "Rohit Sharma",
    age: "28",
    title: "Athlete",
    text: "In today's time, when we're surrounded by so much stress, it's important to pay attention to our body and our lifestyle. Hart ring helps me track my health in a very convenient manner",
    image: "/rohit.png",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    age: "29",
    title: "Fitness Coach",
    text: "Congrats to JC and team for this amazing product, It's quite impressive, the metrics are accurate, the app interface is smooth and is definitely more convenient than a band while sleeping ",
    image: "/nusier.png",
  },
  {
    id: 6,
    name: "Jaime Vandenberg",
    age: "28",
    title: "Miss world Canada, Miss world contestant 2023",
    text: "I love my HART ring, It looks very stylish and is very convenient to wear. I use it all the time! the metrics are very accurate and the battery life is great.",
    image: "/jamie.png",
  },
  {
    id: 7,
    name: "Rakesh Roshan",
    age: "27",
    title: "Yoga Instructor",
    text: "I've been using HART ring to track my sleep, steps, my resting heart rate and my HRV. It's helping me to stay on track and improve my health.",
    image: "/rakesh.png",
  },
];

const carousel = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let interval;
    if (!isDragging) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const slideWidth = carouselRef.current.clientWidth / (isMobile ? 1 : 3);
    
    if (Math.abs(walk) > slideWidth / 4) {
      if (walk > 0 && index > 0) {
        setIndex(prev => prev - 1);
      } else if (walk < 0 && index < testimonials.length - 1) {
        setIndex(prev => prev + 1);
      }
      setIsDragging(false);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const slideWidth = carouselRef.current.clientWidth / (isMobile ? 1 : 3);
    
    if (Math.abs(walk) > slideWidth / 4) {
      if (walk > 0 && index > 0) {
        setIndex(prev => prev - 1);
      } else if (walk < 0 && index < testimonials.length - 1) {
        setIndex(prev => prev + 1);
      }
      setIsDragging(false);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 cursor-grab active:cursor-grabbing"
        style={{ 
          transform: isMobile 
            ? `translateX(-${index * 100}%)` 
            : `translateX(-${index * 100 / 3}%)`
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {testimonials.concat(testimonials.slice(0, 3)).map((testimonial, i) => (
          <div 
            key={i} 
            className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 p-4 select-none`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-84 object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold font-sans">{testimonial.name}, {testimonial.age}</h3>
                <p className="text-sm">{testimonial.title}</p>
                <p className="mt-2 text-sm font-sans">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default carousel;