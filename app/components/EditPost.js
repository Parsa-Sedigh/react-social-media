import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import {useImmerReducer} from "use-immer";
import {useParams} from "react-router-dom";

const ViewSinglePost = () => {
    const originalState = {
        title: {
            value: '',
            hasErrors: false,
            message: ''
        },
        body: {
            value: '',
            hasErrors: false,
            message: ''
        },
        isFetching: true,
        isSaving: false,
        id: useParams().id,
        sendCount: 0
    };
    const ourReducer = (draft, action) => {
        switch (action.type) {
            case 'fetchComplete':
                draft.title.value = action.value.title;
                draft.body.value = action.value.body;
                draft.isFetching = false;
                return;
        }
    };

    const [state, dispatch] = useImmerReducer(ourReducer, originalState);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await Axios.get(`/post/${state.id}`);
                console.log(response.data);
                // setPost(response.data);
                // setIsLoading(false);
                dispatch({type: 'fetchComplete', value: response.data});
            } catch (e) {
                console.log('there was a problem', e);
            }
        };
        fetchPost();
    }, []);

    if (state.isFetching) {
        return (
            <Page title="...">
                <LoadingDotsIcon/>
            </Page>
        );
    }

    return (
        <Page title="Edit Post">
            <form>
                <div className="form-group">
                    <label htmlFor="post-title" className="text-muted mb-1">
                        <small>Title</small>
                    </label>
                    <input value={state.title.value}
                           autoFocus name="title" id="post-title"
                           className="form-control form-control-lg form-control-title" type="text" placeholder=""
                           autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label htmlFor="post-body" className="text-muted mb-1 d-block">
                        <small>Body Content</small>
                    </label>
                    <textarea value={state.body.value}
                              name="body" id="post-body" className="body-content tall-textarea form-control"
                              type="text"/>
                </div>

                <button className="btn btn-primary">Save Updates</button>
            </form>
        </Page>
    );
};

export default ViewSinglePost;
