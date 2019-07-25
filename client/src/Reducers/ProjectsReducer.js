export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR'
export const FILTER_PROJECTS = 'FILTER_PROJECTS';
export const FILTER_BY_PATHNAME = 'FILTER_BY_PATHNAME';
export const GET_NEIGHBOR_PROJECTS = 'GET_NEIGHBOR_PROJECTS';

const returnProjects = (state, projects) => {
    return { ...state, projects };
};

const fetchError = (state) => {
    return { ...state, projectsFetchError: true };
};

const filterProjects = (state, filterKeyword) => {
    if (!filterKeyword) return { ...state, filteredProjects: state.projects };
    
    let  filteredProjects;
    const keyword = filterKeyword.toLowerCase().replace(/\s/g, '');

    filteredProjects = state.projects.filter(project => {
        const tags = project.tags.map(tag => tag.toLowerCase().replace(/\s/g, ''));
        if (tags.includes(keyword)) return project;
        return null;
    });

    return { ...state, filteredProjects };
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
        return null;
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
        case SET_PROJECTS: 
            return returnProjects(state, action.projects);
        case SET_FETCH_ERROR:
            return fetchError(state);
        case FILTER_PROJECTS:
            return filterProjects(state, action.filterKeyword);
        case FILTER_BY_PATHNAME:
            return filterByPathname(action);
        case GET_NEIGHBOR_PROJECTS:
            return getNeighborProjects(action);
        default: 
            return state;
    }
}

export default ProjectsReducer;