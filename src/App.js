import React, { useEffect, useState } from "react";
import HomePage from "./containers/HomePageContainer/HomePage";
import SearchResult from "./containers/SearchResultContainer/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeatSelection from "./containers/SeatSelection/SeatSelection";
import RegisterPage from "./containers/LoginContainer/RegisterPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import LoginPage from "./containers/LoginContainer/LoginPage";
import AboutUsPage from "./containers/AboutUsConatiner/AboutUsPage";
import PrintTicketPage from "./containers/PrintTicketContainer/PrintTicketPage";
import CancellationPage from "./containers/CancellationPageContainer/CancellationPage";
import PrivacyPolicyPage from "./containers/PrivacyPolicyPage/PrivacyPolicyPage";
import TandCPage from "./containers/TandCPage/TandCPage";
import RefundPolicyPage from "./containers/RefundPolicypage/RefundPolicyPage";
import ContactPage from "./containers/ContactPageContainer/ContactPage";
import Booking from "./containers/Booking/Booking";
<<<<<<< HEAD
import Preloader from "./components/Preloader/Preloader";
import routes from "./routes";
=======
import TourismPage from "./containers/TourismPageContainer/TourismPage";
import guide from "./pdf/NetworkTravel.pdf";
>>>>>>> master

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
