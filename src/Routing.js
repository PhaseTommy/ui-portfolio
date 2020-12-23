import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Diabetes from "./Diabetes";
const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/diabetes" component={Diabetes}></Route>
            </Switch>
        </Router>
    );
};

export default Routing;
