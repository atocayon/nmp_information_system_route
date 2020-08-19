import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css"
import NotFoundPage from "./404"
function App() {

    useEffect( () => {
        localStorage.setItem("time", Date.now());
    });

  return (
    <>
      <div>
        <Switch>
          <Route path={"/document-tracking"} exact />
          <Route path={"/work-queue"} exact render={() => {
              window.location = "http://localhost:5003"
          }} />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
