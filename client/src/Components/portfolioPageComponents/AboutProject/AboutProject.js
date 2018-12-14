import React from 'react';

const AboutProject = (props) => (
    <div className="about-project">
        <h2>About this project</h2>
        <hr></hr>
        <p>{props.about}</p>
    </div>
)

export default AboutProject;