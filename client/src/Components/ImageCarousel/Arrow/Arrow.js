import React from 'react';

const Arrow = ({ direction, clickFunction, glyph, arrowPosition, projectName }) => (   
    <div
        className={ `${direction} ${arrowPosition}` }
        onClick={ clickFunction }>
        {direction === "left" ?
            <span>{ glyph } <span className="project-slide-name calus-purple-text">{ projectName }</span></span>
        :
            <span><span className="project-slide-name calus-purple-text">{ projectName }</span> { glyph }</span>
        }
    </div>
);

export default Arrow;