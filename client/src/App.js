import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

const App = () => (
  	<div>
		<Router>
			<div>
				<Switch>
					{/* <Route exact path="/about" component={AboutMe} /> */}
          			<Route exact path="/" component={Home} />
					<Route path="/portfolio/" component={Portfolio} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
