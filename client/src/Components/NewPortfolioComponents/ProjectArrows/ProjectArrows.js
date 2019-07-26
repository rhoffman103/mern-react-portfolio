import React, { useContext, useEffect } from 'react';
import ProjectsContext from '../../../Context/ProjectsContext';
import { GET_NEIGHBOR_PROJECTS, FILTER_BY_PATHNAME } from '../../../Reducers/ProjectsReducer';
import { Link } from 'react-router-dom';
import { Arrow } from './index';
import './projectArrows.css';

const ProjectArrows = () => {

    const { state, stateDispatch } = useContext(ProjectsContext);
    const { currentProject, projects } = state;

    useEffect(() => {
        if (projects && currentProject) {
            stateDispatch({
                type: GET_NEIGHBOR_PROJECTS,
                currentProject
            })
        }
    }, [currentProject, projects, stateDispatch]);

    return (
        <div className="arrow-bar">
            { state.neighbors &&
                <React.Fragment>
                    <ul className="nav arrow-item">
                        <li className="nav-item">
                            <Link 
                                to={state.neighbors.prevProject.pathName}
                                className='dom-link'
                                onClick={() => stateDispatch({
                                    type: FILTER_BY_PATHNAME,
                                    pathname: state.neighbors.prevProject.pathName
                                })}
                            >
                                <Arrow
                                    direction="left"
                                    staticText="previous"
                                    glyph="&#9664;"
                                    arrowPosition="fixed-arrow"
                                    projectName={state.neighbors.prevProject.title}
                                />
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav float-right arrow-item">
                        <li className="nav-item">
                            <Link
                                to={state.neighbors.nextProject.pathName}
                                className='dom-link'
                                onClick={() => stateDispatch({
                                    type: FILTER_BY_PATHNAME,
                                    pathname: state.neighbors.nextProject.pathName
                                })}
                            >
                                <Arrow
                                    direction="right"
                                    staticText="next"
                                    glyph="&#9654;"
                                    arrowPosition="fixed-arrow"
                                    projectName={state.neighbors.nextProject.title}
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