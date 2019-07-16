import React from "react";
import MyNav from '../../Components/Nav/MyNav';

const NoMatch = () => (
  <React.Fragment>
    <MyNav />
    <div>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  </React.Fragment>
);

export default NoMatch;