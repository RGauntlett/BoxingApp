import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CustomWorkOutCard from "../components/CustomWorkOutCard/CustomWorkOutCard";
import HomePage from "../components/WorkOutPlanner/HomePage/HomePage";
import Information from "../components/BoxingInformation/Information";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/TimerCard" component={CustomWorkOutCard} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Information" component={Information} />
      </Switch>
    </Router>
  );
};

export default Routes;
