import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';
import GamePage from "./Container/GamePage";
import StartPage from "./Container/StartPage";
import HighscorePage from "./Container/HighscorePage";
import NoPageFound from "./Container/NoPageFound";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/start" component={StartPage} />
                <Route path="/game" component={GamePage} />
                <Route path="/highscore" component={HighscorePage} />
                <Route component={NoPageFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
