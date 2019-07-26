import React, { useContext, useState, useEffect } from 'react';
import ProjectsContext from '../../../Context/ProjectsContext';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const PrevIcon = () => (
    <span aria-hidden="true" className="calus-purple-text calus-gold-text-hover"><i className="fas fa-angle-left fa-2x"></i></span>
)

const NextIcon = () => (
    <span aria-hidden="true" className="calus-purple-text calus-gold-text-hover"><i className="fas fa-angle-right fa-2x"></i></span>
)

const ProjectCarousel = () => {

    const { state } = useContext(ProjectsContext)
    const [imageSlides, setSlides] = useState(state.currentProject.imageSlides || []);
    
    useEffect(() => {
        setSlides(state.currentProject.imageSlides);
    }, [state.currentProject, imageSlides]);

    return (
        <Carousel
            interval={null}
            nextIcon={<NextIcon />}
            prevIcon={<PrevIcon />}
        >
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