import React from 'react';
import ImageSlide from '../ImageSlide';
import Arrow from '../Arrow';
import './carousel.css';

class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imgUrls: this.props.currentProject.imageSlides
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
            currentImageIndex: index
        });
    }
    
    nextSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;"
                    arrowPosition="slide-arrow"
                />

                <ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex] } />

                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;"
                    arrowPosition="slide-arrow"
                />
            </div>
        );
    }
}

export default Carousel;