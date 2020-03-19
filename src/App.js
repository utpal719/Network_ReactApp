import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import routes from "./routes";
import TourismPage from "./containers/TourismPageContainer/TourismPage";
import guide from "./pdf/NetworkTravel.pdf";

let store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            {routes.map(({ exact, path, component: Component }) => (
              <Route
                path={path}
                exact={exact}
                render={props => <Component {...props} />}
              ></Route>
            ))}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
