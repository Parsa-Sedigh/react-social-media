import React, {useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {useImmerReducer} from "use-immer";
import Header from './components/Header';
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Axios from "axios";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";

Axios.defaults.baseURL = 'http://localhost:8080';

const Main = () => {
    // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')));
    // const [flashMessages, setFlashMessages] = useState([]);

    const initialState = {
        loggedIn: Boolean(localStorage.getItem('complexappToken')),
        flashMessages: [],
        user: {
            token: localStorage.getItem('complexappToken'),
            username: localStorage.getItem('complexappUsername'),
            avatar: localStorage.getItem('complexappAvater')
        }
    };

    const ourReducer = (draft, action) => {
        switch (action.type) {
            case 'login':
                // the tutor way: return {loggedIn: true, flashMessages: state.flashMessages};
                // or: return {...state, loggedIn: true}
                draft.loggedIn = true;
                draft.user = action.data
                return;

            case 'logout':
                // return {loggedIn: false, flashMessages: state.flashMessages};
                draft.loggedIn = false;
                return;

            case 'flashMessage':
                // return {loggedIn: state.loggedIn, flashMessages: state.flashMessages.concat(action.value)};
                draft.flashMessages.push(action.value);
                return;
        }
    };

    // const [state, dispatch] = useReducer(ourReducer, initialState);
    const [state, dispatch] = useImmerReducer(ourReducer, initialState);

    // const addFlashMessage = (msg) => {
    //     setFlashMessages((prev) => prev.concat());
    // };

    useEffect(() => {
        if (state.loggedIn) {
            localStorage.setItem('complexappToken', state.user.token);
            localStorage.setItem('complexappUsername', state.user.username);
            localStorage.setItem('complexappAvater', state.user.avatar);
        } else {
            localStorage.removeItem('complexappToken');
            localStorage.removeItem('complexappUsername');
            localStorage.removeItem('complexappAvater');
        }
    }, [state.loggedIn]);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <FlashMessages messages={state.flashMessages}/>
                    {/*<Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>*/}
                    {/*<Header loggedIn={loggedIn}/>*/}
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            {state.loggedIn ? <Home/> : <HomeGuest/>}
                        </Route>
                        <Route path="/about-us">
                            <About/>
                        </Route>
                        <Route path="/terms">
                            <Terms/>
                        </Route>
                        <Route path="/create-post">
                            {/*<CreatePost addFlashMessage={addFlashMessage}/>*/}
                            <CreatePost/>
                        </Route>
                        <Route path="/post/:id" exact>
                            <ViewSinglePost/>
                        </Route>
                        <Route path="/profile/:username">
                            <Profile />
                        </Route>
                        <Route path="/post/:id/edit" exact>
                            <EditPost />
                        </Route>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

ReactDOM.render(<Main/>, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
