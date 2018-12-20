import React from 'react';

const Arrow = ({ direction, clickFunction, glyph, arrowPosition, projectName, staticText }) => (   
    <div
        className={ `${direction} ${arrowPosition}` }
        onClick={ clickFunction }>
        {direction === "left" ?
            <span>{ glyph } <span className="prev-next">{ staticText }</span>
                <span className="project-slide-name calus-purple-text">{ projectName }</span>
            </span>
        :
            <span>
                <span className="project-slide-name calus-purple-text">{ projectName }</span>
                <span className="prev-next">{ staticText }</span> { glyph }
            </span>
        }
    </div>
);

export default Arrow;