import React from 'react';


// receive image URL and create the required markup to act as one of the slides
const ImageSlide = ({ url }) => {
	
	return (
		<div className="image-slide sharp-shadow">
            <img className="img-fluid image-slide rounded" src={require(`../../../images/${url}`)} alt="project slide" />
        </div>
	);
}

export default ImageSlide;