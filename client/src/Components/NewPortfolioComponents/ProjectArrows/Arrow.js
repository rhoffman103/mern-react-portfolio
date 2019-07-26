import React from 'react';

export const Arrow = ({ direction, glyph, arrowPosition, projectName, staticText }) => (   
    <div className={ `${direction} ${arrowPosition}` } >
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
