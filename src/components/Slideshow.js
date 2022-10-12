import React, { useState } from "react";
import SlideshowCSS from "../style/Slideshow.module.css";
import Left from "../assets/left_arrow.svg";
import Right from "../assets/right_arrow.svg";

const Slideshow = ({ thisLogement }) => {
  const [current, setCurrent] = useState(0);
  const length = thisLogement.pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className={SlideshowCSS.carrousel}>
      {length !== 1 ? (
        <img
          src={Left}
          alt="flèche gauche"
          className={SlideshowCSS.left}
          onClick={prevSlide}
        />
      ) : null}

      {length !== 1 ? (
        <img
          src={Right}
          alt="flèche droite"
          className={SlideshowCSS.right}
          onClick={nextSlide}
        />
      ) : null}

        <p>{`${current + 1}/${length}`}</p>

      {thisLogement.pictures.map((slide, index) => {
        return (
          <div
            className={
              index === current ? SlideshowCSS.active : SlideshowCSS.slide
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                alt="Photos appartement"
                className={SlideshowCSS.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slideshow;
