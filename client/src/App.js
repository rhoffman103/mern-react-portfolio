import React, { useState, useEffect } from "react";
import ProjectsContext from './Context/ProjectsContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API";

const App = () => {

	const [mongoProjects, setProjects] = useState([]);
	
	useEffect(() => {
		API.getProjectsList().then(projects => setProjects(projects.data));
	}, [])

  	return (
		<React.Fragment>
	  		<ProjectsContext.Provider value={{ mongoProjects }}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/portfolio/" component={Portfolio} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</ProjectsContext.Provider>
		</React.Fragment>
	);
};

export default App;
