import React from 'react';
import Slide from './Slide';
import SliderNavigation from './SliderNavigation';
import SliderControlPanel from './SliderControlPanel';

const Slider = () => {
  return (
    <article>
      <Slide/>
      <SliderNavigation/>
      <SliderControlPanel/>
    </article>
  );
}

export default Slider;
