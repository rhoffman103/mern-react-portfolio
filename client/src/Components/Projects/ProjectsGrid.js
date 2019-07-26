import React, { useContext } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import ProjectList from './ProjectList';
import Spinner from '../Spinner'


const ProjectsGrid = () => {

    const { state } = useContext(ProjectsContext);

    return (
        <React.Fragment>
        { state.projects 
        ?
            <React.Fragment>
                <div className="projects">
                    <ProjectList />
                </div>
            </React.Fragment>
        :
            <div className="wrapper">
                <Spinner />
            </div>
        }
        </React.Fragment>
    );
};

export default ProjectsGrid;