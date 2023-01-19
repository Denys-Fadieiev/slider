import React from 'react';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';
import styles from './SliderNavigation.module.scss';

const SliderNavigation = ({handleNextSlide, handlePrevSlide} ) => {
  return (
    <div className={styles.wrapperNavigation}>
      <button 
        className={styles.btnNav}
        onClick={() => handlePrevSlide()}>
        {<MdNavigateBefore/>}
      </button>
      <button 
        className={styles.btnNav}
        onClick={() => handleNextSlide()}
      >
        {<MdNavigateNext/>}
      </button>
    </div>
  );
}

export default SliderNavigation;
