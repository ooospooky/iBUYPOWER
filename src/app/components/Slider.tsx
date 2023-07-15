"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import { products } from './products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
const SliderComponent = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [itemsToShow, setItemToShow] = useState(window.innerWidth >= 768 ? 4 : 1)
  useEffect(() => {
    const handleResize = () => {
      setItemToShow(window.innerWidth >= 768 ? 4 : 1);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleNext = () => {
    sliderRef.current!.slickNext(); //使用！ 確保 ref 不為 null
  };
  const handlePrev = () => {
    sliderRef.current!.slickPrev(); //使用！ 確保 ref 不為 null
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
  };

  return (
    <div id="container">
      <button onClick={handlePrev}>handlePrev</button>
      <button onClick={handleNext}>handleNext</button>
      <Slider {...settings} ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.title} className="w-full h-auto" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>{product.type === 'prebuilt' ? 'Buy Now' : 'Customize'}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default SliderComponent;