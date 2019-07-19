import React, { useContext } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import ProjectList from './ProjectList';
import Spinner from '../Spinner'


const ProjectsGrid = () => {

    const { projects } = useContext(ProjectsContext);

    return (
        projects ?
            <React.Fragment>
                <div className="projects">
                    <ProjectList />
                </div>
            </React.Fragment>
        :
            <div className="wrapper">
                <Spinner />
            </div>
    );
};

export default ProjectsGrid;