import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header.jsx';
import HomeGuest from "./components/HomeGuest.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Terms from "./components/Terms.jsx";

function Main() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomeGuest />
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
