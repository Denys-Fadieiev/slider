import React from 'react';

const SliderNavigation = ({handleNextSlide, handlePrevSlide} ) => {
  return (
    <div>
      <button onClick={() => handlePrevSlide()}>{'<'}</button>
      <button onClick={() => handleNextSlide()}>{'>'}</button>
    </div>
  );
}

export default SliderNavigation;
