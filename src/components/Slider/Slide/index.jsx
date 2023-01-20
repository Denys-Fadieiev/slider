import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Slide.module.scss";

const Slide = ({
	slide: { title, description, src, alt },
	isHovered: [isHovered, setIsHovered],
	isFullScreen: [isFullScreen, setIsFullScreen],
	handleFullScreen,
}) => {
	return (
		<div
			className={styles.wrapperSlide}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onDoubleClick={handleFullScreen}
		>
      <div className={`${!isFullScreen ? styles.wrapperBtnClosed : styles.wrapperBtnClosedFullscreen}`}>
        {isHovered && isFullScreen && (
          <button 
						className={styles.btnClosed}
						onClick={handleFullScreen}>
						{<AiOutlineClose />}
					</button>
        )}
      </div>
			<figure className={`${isFullScreen ? styles.figureFullscreen : styles.figure}`}>
				<img className={styles.img} src={src} alt={alt} />
				{isHovered && (
					<figcaption className={`${!isFullScreen ? styles.figcaption : styles.figcaptionFullscreen}`}>
						<h3 className={styles.title}>{title}</h3>
						<p className={styles.description}>{description}</p>
					</figcaption>
				)}
			</figure>
		</div>
	);
};

export default Slide;
