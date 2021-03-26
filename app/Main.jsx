import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header.jsx';
import HomeGuest from "./components/HomeGuest.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Terms from "./components/Terms.jsx";
import Home from "./components/Home.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Axios from "axios";
import ViewSinglePost from "./components/ViewSinglePost.jsx";
import FlashMessages from "./components/FlashMessages.jsx";

Axios.defaults.baseURL = 'http://localhost:8080';

function Main() {
    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')));
    const [flashMessages, setFlashMessages] = useState([]);

    const addFlashMessage = (msg) => {
        setFlashMessages((prev) => prev.concat());
    };

    return (
        <BrowserRouter>
            <FlashMessages messages={flashMessages} />
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Switch>
                <Route path="/" exact>
                    {loggedIn ? <Home /> : <HomeGuest />}
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="/create-post">
                    <CreatePost addFlashMessage={addFlashMessage} />
                </Route>
                <Route path="/post/:id">
                    <ViewSinglePost />
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
