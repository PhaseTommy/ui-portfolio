import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Diabetes from "./Diabetes";
import NavbarContextListProvider from "./context/NavbarContext";
import ScrollToTop from "./components/ScrollToTop";

const Routing = () => {
    return (
        <NavbarContextListProvider>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/diabetes" component={Diabetes}></Route>
                </Switch>
            </Router>
        </NavbarContextListProvider>
    );
};

export default Routing;
