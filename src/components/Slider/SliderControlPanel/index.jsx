import React from "react";
import { HiPlay, HiPause } from "react-icons/hi";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import styles from "./SliderControlPanel.module.scss";

const SliderControlPanel = ({
  slidesLenght,
  currentSlide: [currentSlide, setCurrentSlide],
	isAutoPlay: [isAutoPlay, setIsAutoPlay],
	isFullScreen: [isFullScreen, setIsFullScreen],
	stepTime: [stepTime, setStepTime],
	isHovered: [isHovered, setIsHovered],
	handleAutoPlay,
	handleFullScreen,
}) => {
	
  return (
		<div className={`${!isFullScreen ? styles.wrapperControlPanel : styles.wrapperControlPanelFullscreen}`}>
			<div className={styles.wrapper}>
				<button className={`${!isFullScreen ? styles.btn : styles.btnFullscreen}`} onClick={handleAutoPlay}>
					{!isAutoPlay ? <HiPlay /> : <HiPause />}
				</button>
				<input
          className={styles.input}
					type="number"
					min={1}
					max={10}
					value={stepTime / 1000}
					onChange={({ target: { value } }) => {
						setStepTime(+value * 1000);
					}}
				/>
			</div>
      <p className={styles.num}>{currentSlide + 1}/{slidesLenght}</p>
			<button className={`${!isFullScreen ? styles.btn : styles.btnFullscreen}`} onClick={handleFullScreen}>
				{!isFullScreen ? <BiFullscreen /> : <BiExitFullscreen />}
			</button>
		</div>
	);
};

export default SliderControlPanel;
