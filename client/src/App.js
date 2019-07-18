import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

const App = () => (
  	<div>
		<Router>
			<div>
				<Switch>
          			<Route exact path="/" component={Home} />
					<Route path="/portfolio/" component={Portfolio} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
