
import API from '../utils/API';

export const GET_PROJECTS = 'GET_PROJECTS';
export const FILTER_PROJECTS = 'FILTER_PROJECTS';
export const FILTER_BY_PATHNAME = 'FILTER_BY_PATHNAME';
export const GET_NEIGHBOR_PROJECTS = 'GET_NEIGHBOR_PROJECTS';

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

const filterByPathname = ({ pathname, mongoProjects }) => {
    pathname = pathname.toLowerCase();

    if (!mongoProjects.length) return null;
    
    let currentProject = undefined;
    
    mongoProjects.some((project) => {
        if (project.pathName.toLowerCase() === pathname) {
            currentProject = project;
            return true;
        }
    });

    return currentProject;
};

const getNeighborProjects = ({ mongoProjects, project }) => {
    let neighbors = null;
    
    const index = mongoProjects.indexOf(project);
    const lastIndex = mongoProjects.length -1;
    const shouldResetIndexPrev = index === 0;
    const shouldResetIndexNext = index === lastIndex;
    const prevIndex = shouldResetIndexPrev ? lastIndex : index - 1;
    const nextIndex = shouldResetIndexNext ? 0 : index + 1;

    neighbors = { prevProject: mongoProjects[prevIndex], nextProject: mongoProjects[nextIndex] };
    
    return neighbors;
};

const ProjectsReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECTS: 
            return returnProjects();
        case FILTER_PROJECTS:
            return filterProjects(action);
        case FILTER_BY_PATHNAME:
            return filterByPathname(action);
        case GET_NEIGHBOR_PROJECTS:
            return getNeighborProjects(action);
        default: 
            return state;
    }
}

export default ProjectsReducer;