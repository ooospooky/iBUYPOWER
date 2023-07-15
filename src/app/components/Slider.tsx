"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import { products } from './products';
import { Card } from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = () => {
  const sliderRef = useRef<Slider | null>(null); //用來調用prev, next按鈕
  const [itemsToShow, setItemsToShow] = useState(window.innerWidth >= 768 ? 4 : 1)
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 4 : 1);
    };
    window.addEventListener('resize', handleResize);  //視窗大小變更時執行handleResize，使不用reload就可以改變itemToShow的value
    return () => {  //clean up func, prevent resource lick 
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
    dots: false, //不顯示slider下方的dot
    infinite: false, //disables infinite loop behavior of the slider
    slidesToShow: itemsToShow, //一次顯示幾筆資料
    slidesToScroll: itemsToShow, //一次滑動滑幾筆資料
  };

  return (
    <div id="container">
      <button onClick={handlePrev}>handlePrev</button>
      <button onClick={handleNext}>handleNext</button>
      <Slider {...settings} ref={sliderRef}>
        {products.map((product) => (
          <Card product={product} />
          // <div key={product.id}>
          //   <img src={product.img} alt={product.title} className="w-full h-auto" />
          //   <h3>{product.title}</h3>
          //   <p>{product.description}</p>
          //   <button>{product.type === 'prebuilt' ? 'Buy Now' : 'Customize'}</button>
          // </div>
        ))}
      </Slider>
    </div>
  );
};


export default SliderComponent;