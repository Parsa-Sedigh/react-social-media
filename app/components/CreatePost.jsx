import React, {useState} from 'react';
import Page from "./Page.jsx";
import Axios from "axios";
import {withRouter} from 'react-router-dom';

const CreatePost = (props) => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await Axios.post('/create-post', {
                    title,
                    body,
                    token: localStorage.getItem('complexappToken')
                });
                console.log('new post was created');
                props.addFlashMessage('Congrats, you successfully created a post.');

                // redirect to new post's url
                props.history.push(`/post/${response.data}`);
            } catch (e) {
                console.log('there was a problem', e);
            }
    };

    return (
        <Page title="Create New Post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="post-title" className="text-muted mb-1">
                        <small>Title</small>
                    </label>
                    <input onChange={e => setTitle(e.target.value)}
                           autoFocus name="title" id="post-title"
                           className="form-control form-control-lg form-control-title" type="text" placeholder=""
                           autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label htmlFor="post-body" className="text-muted mb-1 d-block">
                        <small>Body Content</small>
                    </label>
                    <textarea onChange={e => setBody(e.target.value)}
                              name="body" id="post-body" className="body-content tall-textarea form-control"
                              type="text"/>
                </div>

                <button className="btn btn-primary">Save New Post</button>
            </form>
        </Page>
    );
};

export default withRouter(CreatePost);
