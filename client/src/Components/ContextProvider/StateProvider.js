import React, { useEffect, useReducer } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import useFetchProjects from '../../CustomHooks/useFetchProjects';
import ProjectsReducer from '../../Reducers/ProjectsReducer';

const StateProvider = ({ children }) => {

    const [state, stateDispatch] = useReducer(ProjectsReducer, {});
    const fetchProjects = useFetchProjects();

    useEffect(() => {
        fetchProjects(stateDispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('UPDATED STATE: ', state);
    }, [state]);

    return (
        <ProjectsContext.Provider value={{ state, stateDispatch }}>
            { children }
        </ProjectsContext.Provider>
    );
};

export default StateProvider;