import axios from 'axios';

export default {
    getProjectsList: () => {
        return axios.get('/api/v1/projects');
    },

    postProject: (projectData) => {
        return axios.post('/api/v1/projects', projectData);
    }
};