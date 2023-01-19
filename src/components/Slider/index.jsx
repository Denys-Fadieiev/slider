import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./SliderNavigation";
import SliderControlPanel from "./SliderControlPanel";
import styles from './Slider.module.scss';

const Slider = ({ slides }) => {
  const slidesLenght = slides.length;
	const [currentSlide, setCurrentSlide] = useState(0);
  const [stepTime, setStepTime] = useState(5000);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const fullscreenContent = cx(styles.content, {
  //   [styles.contentFullscreen] : isFullScreen,
  //   }
  // )

	const handleNextSlide = () => 
    currentSlide < (slidesLenght - 1) 
    ? setCurrentSlide(currentSlide => currentSlide + 1) 
    : setCurrentSlide(currentSlide => 0);

	const handlePrevSlide = () => 
      currentSlide > 0
			? setCurrentSlide(currentSlide => currentSlide - 1)
			: setCurrentSlide(currentSlide => slidesLenght - 1);

  const handleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  const handleFullScreen = () => setIsFullScreen(!isFullScreen);

  useEffect(()=>  {
    let timerId = null;
    if(isAutoPlay && !timerId) {
      timerId = setTimeout(() => handleNextSlide(), stepTime);
    };
    return () => {
      clearTimeout(timerId);
      timerId = null;
    };
  }, [isAutoPlay, stepTime, currentSlide]);

	return (
    <div className={`${!isFullScreen ? styles.content : styles.contentFullscreen}`}>
      <article className={styles.slyder}>
        <Slide 
          slide={slides[currentSlide]}
          isHovered={[isHovered, setIsHovered]}
          isFullScreen={[isFullScreen, setIsFullScreen]}
          handleFullScreen={handleFullScreen}
        />
        <SliderNavigation 
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
          isHovered={[isHovered, setIsHovered]}
        />
        <SliderControlPanel
          slidesLenght={slidesLenght}
          currentSlide={[currentSlide, setCurrentSlide]}
          isAutoPlay={[isAutoPlay, setIsAutoPlay]}
          isFullScreen={[isFullScreen, setIsFullScreen]}
          stepTime={[stepTime, setStepTime]}
          isHovered={[isHovered, setIsHovered]}
          handleAutoPlay={handleAutoPlay}
          handleFullScreen={handleFullScreen}
        />
      </article>
    </div>
	);
};

export default Slider;
