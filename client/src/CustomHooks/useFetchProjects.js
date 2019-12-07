import API from '../utils/API';
import { SET_FETCH_ERROR, SET_PROJECTS } from '../Reducers/ProjectsReducer';

const useFetchProjects = () => {
    
    const fetchProjects = (dispatch) => {
        API.getProjectsList()
        .then(res => {
            dispatch({
                type: SET_PROJECTS,
                projects: res.data
            });
        })
        .catch(() => {
            dispatch({
                type: SET_FETCH_ERROR
            });
        });
    }
    
    return fetchProjects;
};

export default useFetchProjects;