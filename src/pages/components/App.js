import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Registration from "../registration/Registration";
import Login from "../login/Login";
import HistoryList from "../historylist/HistoryList";
import HistoryDetails from "../historydetails/HistoryDetails";
import EditProfile from "../editprofile/EditProfile";
import WeatherPage from "../weatherpage/WeatherPage";
import history from "../../history";




const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          
          <Switch>
            <Route path="/" exact component={Registration} />
            <Route path="/login" exact component={Login} />
            <Route path="/weatherpage" exact component={WeatherPage} />
            <Route path="/history" exact component={HistoryList} />
            <Route path="/history/details" exact component={HistoryDetails} />
            <Route path="/profile/edit" exact component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
