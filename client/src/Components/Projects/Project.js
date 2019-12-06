import React from 'react';
import './project.css';
import Col from 'react-bootstrap/Col';
import Link from "react-router-dom/Link";

const Project = ({ tags, pathName, image }) => {

    const technologiesList = tags.map((tag) =>
        <li key={tag} className="tag">
            {tag}
        </li>
    );

    return (
        <Col xs={8} sm={6} md={4} className='mb-3'>
            <Link to={pathName}>
                <div className="card card-container card-size shadow">
                    <div className="d-flex align-items-center">
                        <img className="card-img-top image" src={require("../../images/" + image)} alt="project" />
                        <div className="tags">
                            <ul className="d-flex justify-content-center flex-wrap tag-list">
                                {technologiesList}
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default Project;