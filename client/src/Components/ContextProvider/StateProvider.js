import React, { useEffect, useReducer } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import ProjectsReducer, { SET_PROJECTS, SET_FETCH_ERROR } from '../../Reducers/ProjectsReducer';
import API from '../../utils/API';

const StateProvider = ({ children }) => {

    const [state, stateDispatch] = useReducer(ProjectsReducer, {});

    useEffect(() => {
        console.log('setting on app load')
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