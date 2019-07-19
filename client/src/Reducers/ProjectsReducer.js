
import API from '../utils/API';

export const GET_PROJECTS = 'GET_PROJECTS';
export const FILTER_PROJECTS = 'FILTER_PROJECTS';

const getProjects = () => {
    return new Promise((resolve, reject) => {
        API.getProjectsList().then(projects => resolve(projects.data));
    });
};
  
const returnProjects = async () => {
    const projects = await getProjects();
    return projects;
};

const filterProjects = ({ filterKeyword, mongoProjects }) => {
    if (!filterKeyword) return mongoProjects;

    const keyword = filterKeyword.toLowerCase().replace(/\s/g, '');
    
    return mongoProjects.filter(project => {
        const tags = project.tags.map(tag => tag.toLowerCase().replace(/\s/g, ''));
        if (tags.includes(keyword)) return project;
    });
};

const ProjectsReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECTS: 
            return returnProjects();
        case FILTER_PROJECTS:
            return filterProjects(action);
        default: 
            return state;
    }
}

export default ProjectsReducer;