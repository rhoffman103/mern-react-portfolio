import React from 'react';
import './project.css';
import { Link } from "react-router-dom";

class Project extends React.Component {

    render() {
        const technologiesList = this.props.tags.map((tag) =>
            <li key={tag} className="overlay tag">
                {tag}
            </li>
        )

        const projectLink = `/portfolio/${this.props.pathName}`;

        return (
            <li className="item p-3">
                <Link to={projectLink}>
                    <div className="card card-container card-size shadow">
                        <img className="card-img-top image" src={require("../../images/" + this.props.image)} alt="project" />
                        <div className="tags">
                            <ul className="grid-list">
                                {technologiesList}
                            </ul>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default Project;