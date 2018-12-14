import React from 'react';
import './portfolio.css';

const Portfolio = (props) => (
    <div className="container spacer" id="portfolio">
        <div className="wrapper">
            <div className="portfolio">
                <h2>Portfolio</h2>
            </div>
        </div>
            <div className="projects">
                {props.children}
            </div>
    </div>
)

export default Portfolio;