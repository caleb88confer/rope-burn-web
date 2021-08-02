import { Route, Switch } from "react-router-dom";
// import components
import VideoDemo from "../components/VideoDemo";
import Download from "../components/Download";
import About from "../components/About";

function Main (props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <VideoDemo />
                </Route>
                <Route exact path="/download">
                    <Download />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </main>

    )
}

export default Main;