import React from 'react';

const DecorativeIcon = ({ icon, size, color, children }) => (
    <i className={`${icon} ${size} ${color}`}>
        {children}
    </i>
);

const Icon = ({ hRef, newTarget, icon, size, color, children }) => (
    <React.Fragment>
        { hRef
        ?
            <a href={hRef} rel="noopener noreferrer" target={newTarget || '_blank'}>
                <DecorativeIcon icon={icon} size={size} color={color}>
                    {children}
                </DecorativeIcon>
            </a>
        :
            <DecorativeIcon icon={icon} size={size} color={color}>
                {children}
            </DecorativeIcon>
        }
    </React.Fragment>
);

export default Icon;