import React from 'react';
import styles from './Slide.module.scss';

const Slide = ({slide: { title, description, src, alt}}) => {
  return (
    <div>
      <button>X</button>
      <figure >
        <img 
          className={styles.img}
          src={src} 
          alt={alt}/>
        <figcaption>
          <h3>{title}</h3>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Slide;
