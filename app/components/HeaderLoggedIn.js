import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

const HeaderLoggedIn = (props) => {
    // const {setLoggedIn} = useContext(DispatchContext);
    const appDispatch = useContext(DispatchContext);
    const appState = useContext(StateContext);

    const handleLogout = () => {
        // props.setLoggedIn(false);
        // setLoggedIn(false);
        appDispatch({type: 'logout'});
        /*
        localStorage.removeItem('complexappToken');
        localStorage.removeItem('complexappUsername');
        localStorage.removeItem('complexappAvater');
         */
    };


    return (
        <div className="flex-row my-3 my-md-0">
            <a href="#" className="text-white mr-2 header-search-icon">
                <i className="fas fa-search"></i>
            </a>
            <span className="mr-2 header-chat-icon text-white">
            <i className="fas fa-comment"></i>
            <span className="chat-count-badge text-white"> </span>
          </span>
            <Link to={`/profile/${appState.user.username}`} className="mr-2">
                {/*<img className="small-header-avatar"*/}
                {/*     src={localStorage.getItem('complexappAvater')} />*/}
                <img className="small-header-avatar"
                     src={appState.user.avatar} />
            </Link>
            <Link className="btn btn-sm btn-success mr-2" to="/create-post">
                Create Post
            </Link>
            <button onClick={handleLogout} className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
    );
};

export default HeaderLoggedIn;
