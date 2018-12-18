import React from 'react';
import './skills.css';

const Skills = (props) => (
    <React.Fragment>
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="text-center">Frontend</h3>
                <div className="flex-center-container">
                    <div className="pentagon">
                        <div className="inner">
                            <ul className="skills-list">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>ES6</li>
                                <li>React</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <h3 className="text-center">Backend</h3>
                <div className="flex-center-container">
                <div className="hex">
                    <div className="inner">
                        <ul className="skills-list">
                            <li>NodeJS</li>
                            <li>mySQL</li>
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Skills;