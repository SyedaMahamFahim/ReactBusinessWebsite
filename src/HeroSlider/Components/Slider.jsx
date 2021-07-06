import React, { useState, useEffect } from 'react'
import "../Css/slider.css"
import SliderContent from './SliderContent'
import SliderData from './SliderData'
import Arrows from './Arrows'


const len = SliderData.length - 1;
const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);
    

    return (
        <>
<div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderData={SliderData} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
     
    </div>
        </>
    )
}
export default Slider