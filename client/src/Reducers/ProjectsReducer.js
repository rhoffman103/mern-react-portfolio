export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR'
export const FILTER_PROJECTS = 'FILTER_PROJECTS';
export const FILTER_BY_PATHNAME = 'FILTER_BY_PATHNAME';
export const GET_NEIGHBOR_PROJECTS = 'GET_NEIGHBOR_PROJECTS';

const returnProjects = (state, projects) => {
    return { ...state, projects, projectsFetchError: false };
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

const filterByPathname = (state, pathname) => {
    if (!state.projects) return state;
    
    pathname = pathname.toLowerCase();
    let currentProject = undefined;
    
    let noProjectMatch = !state.projects.some((project) => {
        if (project.pathName.toLowerCase() === pathname) {
            currentProject = project;
            return true;
        }
        return null;
    });

    return { ...state, currentProject, noProjectMatch, latestProjectPathname: pathname };
};

const getNeighborProjects = (state, currentProject) => {
    let neighbors = null;
    
    const index = state.projects.indexOf(currentProject);
    const lastIndex = state.projects.length -1;
    const shouldResetIndexPrev = index === 0;
    const shouldResetIndexNext = index === lastIndex;
    const prevIndex = shouldResetIndexPrev ? lastIndex : index - 1;
    const nextIndex = shouldResetIndexNext ? 0 : index + 1;

    neighbors = { prevProject: state.projects[prevIndex], nextProject: state.projects[nextIndex] };
    
    return { ...state, neighbors };
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
            return filterByPathname(state, action.pathname);
        case GET_NEIGHBOR_PROJECTS:
            return getNeighborProjects(state, action.currentProject);
        default: 
            return state;
    };
};

export default ProjectsReducer;