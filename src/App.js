import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import routes from "./routes";
import Preloader from "./components/Preloader/Preloader";
import jwt from "jsonwebtoken";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
let store = createStore(rootReducer);

function App() {
  console.log(jwt.decode(localStorage.getItem("ntToken"), "nwt_techv"));
  return (
    <ErrorBoundary>
    <Provider store={store}>
      <div className="App">
        {/* <ETicket /> */}
        <Router>
          <NavBar />
          <Switch>
            {routes.map(
              ({
                exact,
                path,
                component: Component,
                wrapPreloader = false,
                defaultLoading = true
              }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={props => (
                    <>
                      {wrapPreloader ? (
                        <Preloader
                          {...props}
                          Component={Component}
                          defaultLoading={defaultLoading}
                        />
                      ) : (
                        <Component {...props} />
                      )}
                    </>
                  )}
                ></Route>
              )
            )}
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
