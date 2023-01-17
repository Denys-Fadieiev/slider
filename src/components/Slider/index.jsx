import React, { useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./SliderNavigation";
import SliderControlPanel from "./SliderControlPanel";

const Slider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleNextSlide = () => 
    currentSlide < (slides.length - 1) 
    ? setCurrentSlide(currentSlide => currentSlide + 1) 
    : setCurrentSlide(currentSlide => 0);

	const handlePrevSlide = () => 
      currentSlide > 0
			? setCurrentSlide(currentSlide => currentSlide - 1)
			: setCurrentSlide(currentSlide => slides.length - 1);


	return (
		<article>
			<Slide slide={slides[currentSlide]}/>
			<SliderNavigation 
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide} 
      />
			<SliderControlPanel />
		</article>
	);
};

export default Slider;
