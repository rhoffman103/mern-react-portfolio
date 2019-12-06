import axios from 'axios';
const basePath = process.env.NODE_ENV !== "production" ? '/portfolio-257403/us-central1/app' : '';

export default {
    getProjectsList: () => {
        return axios.get(`${basePath}/api/v1/projects`);
    },

    postProject: (projectData) => {
        return axios.post(`${basePath}/api/v1/projects`, projectData);
    }
};