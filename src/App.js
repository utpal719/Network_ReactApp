import React from "react";
import HomePage from "./containers/HomePageContainer/HomePage";
import SearchResult from "./containers/SearchResultContainer/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeatSelection from "./containers/SeatSelection/SeatSelection";
import RegisterPage from "./containers/LoginContainer/RegisterPage"
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

import LoginPage from "./containers/LoginContainer/LoginPage";
import AboutUsPage from './containers/AboutUsConatiner/AboutUsPage'
import PrintTicketPage from './containers/PrintTicketContainer/PrintTicketPage'
import CancellationPage from './containers/CancellationPageContainer/CancellationPage'
import PrivacyPolicyPage from "./containers/PrivacyPolicyPage/PrivacyPolicyPage";
import TandCPage from "./containers/TandCPage/TandCPage"
import RefundPolicyPage from "./containers/RefundPolicypage/RefundPolicyPage"
import ContactPage from "./containers/ContactPageContainer/ContactPage"
import Booking from "./containers/Booking/Booking";

let store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/printticket" component={PrintTicketPage} />
            <Route exact path="/cancelticket" component={CancellationPage} />
            <Route exact path="/termsandconditions" component={TandCPage} />
            <Route exact path="/refundpolicy" component={RefundPolicyPage} />
            <Route exact path="/aboutus" component={AboutUsPage} />
            <Route exact path="/searchresult" component={SearchResult} />
            <Route exact path="/privacypolicy" component={PrivacyPolicyPage} />
            <Route exact path="/seatselection" component={SeatSelection} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
