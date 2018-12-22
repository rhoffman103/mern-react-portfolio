import React from 'react';

const Arrow = ({ direction, glyph, arrowPosition, onClick }) => (   
    <div
        className={ `${direction}-arrow ${arrowPosition}` }
        onClick={ onClick }>
            <span>{ glyph }</span>
    </div>
);

export default Arrow;