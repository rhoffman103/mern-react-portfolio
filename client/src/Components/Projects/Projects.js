import React, { useContext, useEffect } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import { SET_FETCH_ERROR, SET_PROJECTS } from '../../Reducers/ProjectsReducer';
import API from '../../utils/API';
import FilterKeywords from './FilterKeywords';
import ProjectsGrid from './ProjectsGrid';
import Button from 'react-bootstrap/Button';

const Projects = () => {

    const { state, stateDispatch } = useContext(ProjectsContext);

    const fetchProjects = () => {
        API.getProjectsList()
        .then(res => {
            stateDispatch({
                type: SET_PROJECTS,
                projects: res.data
            });
        })
        .catch(() => {
            stateDispatch({
                type: SET_FETCH_ERROR
            });
        });
    };

    return (
        <div className="container ptb-100" id="portfolio">
            <div className="portfolio">
                <h2 className="text-center text-md-left">Portfolio</h2>
                <hr />
            </div>
            { state.projectsFetchError
            ?
                <div className='text-center text-md-left'>
                    <h3>Oops!</h3>
                    <p>Something went wrong fetching projects</p>
                    <Button
                        variant='calus-purple'
                        type='button'
                        className='m-2'
                        onClick={fetchProjects}
                    >
                        Try Again?
                    </Button>
                </div>
            :
                <>
                    <FilterKeywords />
                    <ProjectsGrid />
                </>
            }
        </div>
    );
};


export default Projects;