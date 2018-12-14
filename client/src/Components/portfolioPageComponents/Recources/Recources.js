import React from 'react';

const Recources = (props) => (
    <div className="recources">
        <h2>Recources</h2>
        <ul>
            <li>
                Deployed at: <a href={props.deployed} rel="noopener noreferrer" target="_blank">
                    {props.deployed}
                </a>
            </li>
            <li>
                Github repo: <a href={props.repo} rel="noopener noreferrer" target="_blank">
                    {props.repo}
                </a>
            </li>
        </ul>
    </div>
)

export default Recources;