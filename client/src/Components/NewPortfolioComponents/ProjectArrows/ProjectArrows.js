import React, { useContext, useReducer, useEffect } from 'react';
import ProjectsContext from '../../../Context/ProjectsContext';
import PortfolioContext from '../../../Context/PortfolioContext';
import ProjectsReducer, { GET_NEIGHBOR_PROJECTS, FILTER_BY_PATHNAME } from '../../../Reducers/ProjectsReducer';
import Link from 'react-router-dom/Link';
import Arrow from '../../ImageCarousel/Arrow';
import './projectArrows.css';

const ProjectArrows = () => {

    const { mongoProjects } = useContext(ProjectsContext);
    const { project, currentProjectDispatch } = useContext(PortfolioContext);
    const [neighborProjects, neighborsDispatch] = useReducer(ProjectsReducer, null)

    useEffect(() => {
        neighborsDispatch({
            type: GET_NEIGHBOR_PROJECTS,
            mongoProjects,
            project
        })
    }, [mongoProjects, project])

    const setProject = (project) => {
        currentProjectDispatch({
            type: FILTER_BY_PATHNAME,
            pathname: project.pathName,
            mongoProjects: project
        })
    }

    return (
        <div className="arrow-bar">
            { neighborProjects &&
                <React.Fragment>
                    <ul className="nav arrow-item">
                        <li className="nav-item">
                            <Link 
                                to={neighborProjects.prevProject.pathName}
                                onClick={() => setProject(neighborProjects.prevProject)}
                            >
                                <Arrow
                                    direction="left"
                                    staticText="previous"
                                    // clickFunction={neighborProjects.previousProject}
                                    glyph="&#9664;"
                                    arrowPosition="fixed-arrow"
                                    projectName={neighborProjects.prevProject.title}
                                />
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav float-right arrow-item">
                        <li className="nav-item">
                            <Link
                                to={neighborProjects.nextProject.pathName}
                                onClick={() => setProject(neighborProjects.nextProject)}
                            >
                                <Arrow
                                    direction="right"
                                    staticText="next"
                                    // clickFunction={neighborProjects.nextProject}
                                    glyph="&#9654;"
                                    arrowPosition="fixed-arrow"
                                    projectName={neighborProjects.nextProject.title}
                                />
                            </Link>
                        </li>
                    </ul>
                </React.Fragment>
            }
        </div>
    );
};

export default ProjectArrows;