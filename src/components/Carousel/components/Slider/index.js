import React from 'react';
import SlickSlider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
}

const Slider = ({ children }) => (
  <section id="slider">
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  </section>
);

export default Slider;