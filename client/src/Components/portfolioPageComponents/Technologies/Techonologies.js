import React from 'react';

class Technologies extends React.Component {
    render() {
        const technologiesList = this.props.technologies.map((technology) =>
            <li key={technology}>
                {technology}
            </li>
        )
        return (
            <div className="technologies">
                <h2 className="text-center text-md-left">Tech</h2>
                <p>Code technologies used in this project.</p>
                <ul>
                    {technologiesList}
                </ul>
            </div>
        )
    }
}

export default Technologies;