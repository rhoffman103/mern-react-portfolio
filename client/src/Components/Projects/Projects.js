import React, { useContext } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import useFetchProjects from '../../CustomHooks/useFetchProjects';
import Button from 'react-bootstrap/Button';
import FilterKeywords from './FilterKeywords';
import ProjectsGrid from './ProjectsGrid';
import Spinner from '../Spinner';

const Projects = () => {

    const { state, stateDispatch } = useContext(ProjectsContext);
    const fetchProjects = useFetchProjects();

    return (
        <div className="container ptb-100" id="portfolio">
            <div className="portfolio">
                <h2 className="text-center text-md-left">Portfolio</h2>
                <hr />
            </div>
            { state.projects
            ?
                state.projectsFetchError
                ?
                    <div className='text-center text-md-left'>
                        <h3>Oops!</h3>
                        <p>Something went wrong fetching projects</p>
                        <Button
                            variant='calus-purple'
                            type='button'
                            className='m-2'
                            onClick={() => fetchProjects(stateDispatch)}
                        >
                            Try Again?
                        </Button>
                    </div>
                :
                    <>
                        <FilterKeywords />
                        <ProjectsGrid />
                    </>
            :   <Spinner />
            }
        </div>
    );
};


export default Projects;