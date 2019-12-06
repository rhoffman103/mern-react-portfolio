import React, { useState, useContext, useEffect } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import { FILTER_BY_PATHNAME } from '../../Reducers/ProjectsReducer';
import { Redirect } from 'react-router-dom';
import MyNav from '../../Components/Nav/MyNav';
import AboutProject from '../../Components/portfolioPageComponents/AboutProject';
import ProjectCarousel from '../../Components/NewPortfolioComponents/Carousel/Carousel';
import Technologies from '../../Components/portfolioPageComponents/Technologies';
import Recources from '../../Components/portfolioPageComponents/Recources';
import ProjectArrows from '../../Components/NewPortfolioComponents/ProjectArrows';
import Footer from '../../Components/Footer';
import Spinner from '../../Components/Spinner';

const NewPortfolio = ({ location }) => {

    const { state, stateDispatch } = useContext(ProjectsContext);
    const [projectsExist, setProjectsExist] = useState();

    useEffect(() => {
        if (state.projects && !projectsExist) {
            setProjectsExist(true);
        }
    }, [state, projectsExist]);

    useEffect(() => {
        if (projectsExist) {
            stateDispatch({
                type: FILTER_BY_PATHNAME,
                pathname: location.pathname
            });
        };
    }, [projectsExist, location, stateDispatch]);

    return (
        <React.Fragment>
            { state.noProjectMatch && <Redirect to='/oops' /> }
            <div className='calus-platinum-tint-bg'>
                <MyNav />
                    { state.currentProject
                    ?
                        <div className='container restricted-width'>
                            <h1 className="mt-1 text-center text-md-left">{state.currentProject.title}</h1>
                            <p>{state.currentProject.preview}</p>
                            <ProjectCarousel />
                            <AboutProject
                                about={state.currentProject.about}
                            />
                            <Technologies
                                technologies={state.currentProject.allTechnologies}
                            />
                            <Recources
                                deployed={state.currentProject.deployedUrl}
                                repo={state.currentProject.repoUrl}
                            />
                            <hr></hr>
                            <ProjectArrows />
                        </div>
                    :
                        <div className="container spacer">
                            <Spinner />
                        </div>
                    }
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default NewPortfolio;