import React from 'react';
import Icon from '../Icon';

const InfoIconList = ({ iconSize, color }) => (
    <div className="icons">
        <ul className="icon-list justify-content-center">
            <li>
                <Icon
                    hRef='https://github.com/rhoffman103'
                    icon='fab fa-github-square'
                    size={iconSize}
                    color={color}
                />
            </li>
            <li>
                <Icon
                    hRef='https://www.linkedin.com/in/robert-hoffman13/'
                    icon='fab fa-linkedin' size={iconSize}
                    color={color}
                />
            </li>
            <li>
                <Icon
                    hRef="mailto:rhoffman103@gmail.com?Subject=Web%20Inquiry"
                    icon='fa fa-envelope'
                    size={iconSize}
                    color={color}
                    newTarget='_top'
                />
            </li>
        </ul>
    </div>
);

export default InfoIconList;