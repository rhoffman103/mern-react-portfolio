import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import TestPage from './pages/Test';

const App = () => (
  	<div>
		<Router>
			<div>
				<Switch>
					{/* <Route exact path="/about" component={AboutMe} /> */}
          			<Route exact path="/" component={Home} />
					<Route path="/portfolio/" component={Portfolio} />
					<Route path='/test' component={TestPage} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
