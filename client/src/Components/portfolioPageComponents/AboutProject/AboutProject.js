import React from 'react';

const AboutProject = (props) => (
    <div className="about-project mt-4">
        <h2>About this project</h2>
        <hr></hr>
        <p>{props.about}</p>
    </div>
)

export default AboutProject;