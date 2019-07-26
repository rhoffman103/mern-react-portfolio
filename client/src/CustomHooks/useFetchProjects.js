import { useState } from 'react';
import API from '../utils/API';
import { SET_FETCH_ERROR, SET_PROJECTS } from '../Reducers/ProjectsReducer';

const useFetchProjects = () => {

    const [dispatchOrder, setDispatchOrder] = useState({});

    API.getProjectsList()
    .then(res => {
        setDispatchOrder({
            type: SET_PROJECTS,
            projects: res.data
        });
    })
    .catch(() => {
        setDispatchOrder({
            type: SET_FETCH_ERROR
        });
    });
    
    return dispatchOrder;
};

export default useFetchProjects;