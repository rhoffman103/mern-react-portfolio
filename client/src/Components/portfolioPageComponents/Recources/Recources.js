import React from 'react';
import ReactGA from 'react-ga';

const Recources = (props) => (
    <div className="recources">
        <h2 className="text-center text-md-left">Recources</h2>
        <ul>
            <li>
                <span className="mr-2">Deployed at:</span>
                <ReactGA.OutboundLink
                    eventLabel="Deployed Site"
                    to={props.deployed}
                    rel="noopener noreferrer"
                    target="_blank">
                    {props.deployed}
                </ReactGA.OutboundLink>
            </li>
            <li>
                <span className="mr-2">Github repo:</span>
                <ReactGA.OutboundLink
                    eventLabel="GitHub"
                    to={props.repo}
                    rel="noopener noreferrer"
                    target="_blank">
                    {props.repo}
                </ReactGA.OutboundLink>
            </li>
        </ul>
    </div>
)

export default Recources;