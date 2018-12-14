import React from 'react';
import Project from '../Project';

class ProjectList extends React.Component {
    render() {
        const allProjects = this.props.projects.map((project) => 
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
        return (
            <div className="">
                <ul className="grid-list p-0">
                    {allProjects}
                </ul>
            </div>
        )
    }
}

export default ProjectList;