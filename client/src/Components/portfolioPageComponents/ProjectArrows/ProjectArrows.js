import React from 'react';
import Arrow from '../../ImageCarousel/Arrow';
import './projectArrows.css';

const ProjectArrows = (props) => (
    <div className="arrow-bar">
        <ul className="nav arrow-item">
            <li className="nav-item">
            <Arrow
                direction="left"
                staticText="previous"
                clickFunction={props.previousProject}
                glyph="&#9664;"
                arrowPosition="fixed-arrow"
                projectName={props.viewPreviousProject}
            />
            </li>
        </ul>
        <ul className="nav float-right arrow-item">
            <li className="nav-item">
            <Arrow
                direction="right"
                staticText="next"
                clickFunction={props.nextProject}
                glyph="&#9654;"
                arrowPosition="fixed-arrow"
                projectName={props.viewNextProject}
            />
            </li>
        </ul>
    </div>
)

export default ProjectArrows;