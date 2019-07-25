import React, { useContext } from 'react';
import PortfolioContext from '../../../Context/PortfolioContext';
import Carousel from 'react-bootstrap/Carousel';

const ProjectCarousel = () => {

    const { project } = useContext(PortfolioContext)
    let imageSlides = [];

    if (project) imageSlides = project.imageSlides;
    
    return (
        <Carousel>
            {imageSlides.map((image, index) => (
                <Carousel.Item key={`${image}-${index + 1}`}>
                    <img 
                        className='d-block h-100 w-100'
                        src={require(`../../../images/${image}`)}
                        alt={`slide ${index}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
};

export default ProjectCarousel;