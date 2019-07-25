import React, { useState, useReducer, useContext, useEffect } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import PortfolioContext from '../../Context/PortfolioContext';
import ProjectsReducer, { FILTER_BY_PATHNAME } from '../../Reducers/ProjectsReducer';
import { Redirect } from 'react-router-dom'
import MyNav from '../../Components/Nav/MyNav';
import AboutProject from '../../Components/portfolioPageComponents/AboutProject';
import ProjectCarousel from '../../Components/NewPortfolioComponents/Carousel/Carousel';
import Technologies from '../../Components/portfolioPageComponents/Technologies';
import Recources from '../../Components/portfolioPageComponents/Recources';
import ProjectArrows from '../../Components/NewPortfolioComponents/ProjectArrows';
import Footer from '../../Components/Footer';
import Spinner from '../../Components/Spinner';

const NewPortfolio = () => {
    const { mongoProjects } = useContext(ProjectsContext);
    const [noMatch, setNoMatch]  = useState(false);
    const [currentProject, curentProjectDispatch] = useReducer(ProjectsReducer, null)

    useEffect(() => {
        curentProjectDispatch({
            type: FILTER_BY_PATHNAME,
            pathname: window.location.pathname.split("/").pop(),
            mongoProjects
        })
    }, [mongoProjects]);

    useEffect(() => {
        if (currentProject === undefined) setNoMatch(true)
    }, [currentProject]);

    return (
        <React.Fragment>
            { noMatch && <Redirect to='/oops' /> }
            <div className='calus-platinum-tint-bg'>
                <MyNav />
                    { currentProject
                    ?
                        <div className='container restricted-width'>
                            <h1 className="mt-1 text-center text-md-left">{currentProject.title}</h1>
                            <p>{currentProject.preview}</p>
                            <PortfolioContext.Provider value={{ project: currentProject, curentProjectDispatch }}>
                                <ProjectCarousel />
                                <AboutProject
                                    about={currentProject.about}
                                />
                                <Technologies
                                    technologies={currentProject.allTechnologies}
                                />
                                <Recources
                                    deployed={currentProject.deployedUrl}
                                    repo={currentProject.repoUrl}
                                />
                                <hr></hr>
                                <ProjectArrows />
                            </PortfolioContext.Provider>
                        </div>
                    :
                        <div className="container spacer">
                            <Spinner />
                        </div>
                    }
                <Footer />
            </div>
        </React.Fragment>
    )
};

export default NewPortfolio;