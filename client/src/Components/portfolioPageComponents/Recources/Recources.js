import React from 'react';
import ReactGA from 'react-ga';

const Recources = (props) => (
    <div className="recources">
        <h2>Recources</h2>
        <ul>
            <li>
                Deployed at: 
                <ReactGA.OutboundLink
                    eventLabel="Deployed Site"
                    to={props.deployed}
                    rel="noopener noreferrer"
                    target="_blank">
                    {props.deployed}
                </ReactGA.OutboundLink>
                {/* Deployed at: <a href={props.deployed} rel="noopener noreferrer" target="_blank">
                    {props.deployed}
                </a> */}
            </li>
            <li>
                Github repo: 
                <ReactGA.OutboundLink
                    eventLabel="GitHub"
                    to={props.repo}
                    rel="noopener noreferrer"
                    target="_blank">
                    {props.repo}
                </ReactGA.OutboundLink>
                {/* Github repo: <a href={props.repo} rel="noopener noreferrer" target="_blank">
                    {props.repo}
                </a> */}
            </li>
        </ul>
    </div>
)

export default Recources;