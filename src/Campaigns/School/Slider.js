import React from 'react';
import { SliderCarouselComponent } from '../../slideHome/SliderCarouselComponent';

const Slider = () => {
  return (
    <div className='highschool__slider-container'>
      <SliderCarouselComponent height={30} dots={false}/>
    </div>
  );
}
 
export default Slider;