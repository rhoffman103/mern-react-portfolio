import React, { useContext } from 'react';
import { FILTER_PROJECTS } from '../../Reducers/ProjectsReducer';
import ProjectsContext from '../../Context/ProjectsContext';
import Button from 'react-bootstrap/Button';

const FilterKeywords = () => {
    
    const words = ['all projects', 'full-stack', 'react js', 'handlebars', 'my sql', 'mongo db', 'jquery', 'bootstrap', 'materialize css'];
    const { stateDispatch } = useContext(ProjectsContext)
    
    const setWord = (clickedKeyword) => {
        if (clickedKeyword === 'all projects') clickedKeyword = null;
        stateDispatch({
            type: FILTER_PROJECTS,
            filterKeyword: clickedKeyword
        });
    };
    
    return (
        <div className='container'>
            <h5 className="text-center text-md-left">Filter Projects</h5>
            <div className='d-flex justify-content-center flex-wrap'>
                { words.map((word, index) => (
                    <div
                        xs={3} md={2}
                        key={`${word}-${index}`}
                    >
                        <Button
                            variant='calus-purple'
                            type='button'
                            className='m-2'
                            onClick={() => setWord(word)}
                        >
                            {word.toUpperCase()}
                        </Button>
                    </div>
                )) }
            </div>
            <hr />
        </div>
    )
};

export default FilterKeywords;