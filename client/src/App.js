import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NewPortfolio from "./pages/NewPortfolio/NewProtfolio";
import StateProvider from "./Components/ContextProvider/StateProvider";
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import './breakpoints.css';

const App = () => (
	<Router>
		<ScrollToTop>
			<StateProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path='/portfolio/' component={NewPortfolio} />
					<Route component={NoMatch} />
				</Switch>
			</StateProvider>
		</ScrollToTop>
	</Router>
);

export default App;