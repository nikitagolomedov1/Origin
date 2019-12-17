import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import HistoryList from "../pages/historylist/HistoryList";
import HistoryDetails from "../pages/historydetails/HistoryDetails";
import EditProfile from "../pages/editprofile/EditProfile";
import WeatherPage from "../pages/weatherpage/WeatherPage";
import history from "../history";




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
