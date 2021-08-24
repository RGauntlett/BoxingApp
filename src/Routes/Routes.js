import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CustomWorkOutCard from "../components/CustomWorkOutCard/CustomWorkOutCard";
import BuildYourWorkOut from "../components/WorkOutPlanner/BuildYourWorkOut/BuildYourWorkOut";
import Information from "../components/BoxingInformation/Information";
import HomePage from "../components/HomePage/HomePage";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route
          exact
          path="/TimerCard"
          component={CustomWorkOutCard}
          onPause={props.onPause}
        />
        <Route exact path="/buildyourworkout" component={BuildYourWorkOut} />
        <Route exact path="/">
          <Redirect to="/buildyourworkout" />
        </Route>
        <Route exact path="/Information" component={Information} />
      </Switch>
    </Router>
  );
};

export default Routes;
