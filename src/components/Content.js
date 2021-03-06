import NavBar from "components/Navbar";
import {Switch, Route} from "react-router-dom";

import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

function Content(){
    return (
        <main className="flex-auto">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/collection">
                    <Collection />
                </Route>
            </Switch>
        </main>
    )
}

export default Content