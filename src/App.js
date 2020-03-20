import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import routes from "./routes";
import TourismPage from "./containers/TourismPageContainer/TourismPage";
import guide from "./pdf/NetworkTravel.pdf";
import Preloader from "./components/Preloader/Preloader";

let store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            {routes.map(
              ({ exact, path, component: Component, wrapPreloader }) => (
                <Route
                  path={path}
                  exact={exact}
                  render={props => (
                    <>
                      {wrapPreloader ? (
                        <Preloader {...props} Component={Component} />
                      ) : (
                        <Component {...props} />
                      )}
                    </>
                  )}
                ></Route>
              )
            )}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
