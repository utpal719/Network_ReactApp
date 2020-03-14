import React from "react";
import HomePage from "./containers/HomePageContainer/HomePage";
import SearchResult from "./containers/SearchResultContainer/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeatSelection from "./containers/SeatSelection/SeatSelection";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
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
            <Route exact path="/searchresult" component={SearchResult} />
            <Route exact path="/seatselection" component={SeatSelection} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
