import React from 'react';
import './intro.css';

const Intro = (props) => (
    <header>
        <div className="my-container intro">
            <div className="wrapper">
                <div className="flex item">
                    <p>Hello, I'm <span className=" font-weight-bold calus-purple-text">Bobby Hoffman</span>.</p>
                    <p>A full-stack web developer graduate from the UNH Coding Bootcamp.</p>
                    <button type="button" onClick={props.smoothScroll} className="btn transparent-btn btn-border-gold calus-gold-text btn-lg check-work-btn" data-scroll-to="about-me">Check Out My Work</button>
                    {/* onClick="document.getElementById('about-me').scrollIntoView();" */}
                </div>
            </div>
        </div>
    </header>
)

export default Intro;