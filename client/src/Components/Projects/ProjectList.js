import React, { useContext } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import Row from 'react-bootstrap/Row';
import Project from './Project';

const ProjectList = () => {
    
    const { state } = useContext(ProjectsContext);

    let filteredProjects;
    
    if (state.projects) {
        let projects;
        if (state.filteredProjects) {
            projects = state.filteredProjects;
        }
        else projects = state.projects;

        filteredProjects = projects.map((project) => 
            <Project
                key={project._id}
                id={project._id}
                image={project.image}
                about={project.about}
                tags={project.tags}
                projectPage={project.title}
                pathName={project.pathName}
            />
        );
    };

    return (
        <section className="container">
            <Row className="justify-content-center">
                {filteredProjects}
            </Row>
        </section>
    );
};

export default ProjectList;