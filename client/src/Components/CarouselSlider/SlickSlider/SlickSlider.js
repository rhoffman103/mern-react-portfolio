import React from 'react';
import Slider from 'react-slick';
import Arrow from '../Arrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-slider.css';
const CarouselSlider = ({ items }) => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow 
                        direction="left"
                        glyph="&#9664;"
                        arrowPosition="slide-arrow"
                    />,
        nextArrow: <Arrow 
                        direction="right"
                        glyph="&#9654;"
                        arrowPosition="slide-arrow"
                    />
    };
    return (
        <div>
            <Slider {...settings} className="sharp-shadow">
                {items.map((item, index) =>
                    <img key={index} data-order={index} className="w-100 rounded" src={require(`../../../images/${item}`)} alt="carousel slide" />
                )}
            </Slider>
        </div>
    );
}

export default CarouselSlider;