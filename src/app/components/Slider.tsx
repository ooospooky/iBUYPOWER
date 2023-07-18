"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import { products } from './products';
import { Card } from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderBtn } from './SliderBtn';

const SliderComponent = () => {
  const breakpoints = [
    { width: 1200, itemsToShow: 4 },
    { width: 900, itemsToShow: 3 },
    { width: 640, itemsToShow: 2 },
  ];

  const sliderRef = useRef<Slider | null>(null); //用來調用prev, next按鈕
  const [itemsToShow, setItemsToShow] = useState(4)
  const [itemsToScroll, setItemsToScroll] = useState(1)
  useEffect(() => {

    const getItemsToShow = () => {
      const breakpoint = breakpoints.find(({ width }) => window.innerWidth >= width) || null; //if winnerWidth <640, itemsToShow will become undefined
      return breakpoint ? breakpoint.itemsToShow : 1;
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setItemsToShow(getItemsToShow());
        setItemsToScroll(window.innerWidth >= 1200 ? 4 : 1)
      }
    };

    handleResize(); // 初始化設定 itemsToShow 的值
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
    slidesToScroll: itemsToScroll, //一次滑動滑幾筆資料

  };

  return (
    <div id="container" className="">
      <SliderBtn itemsToShow={itemsToShow} handleNext={handleNext} handlePrev={handlePrev} />
      <Slider {...settings} ref={sliderRef}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};


export default SliderComponent;