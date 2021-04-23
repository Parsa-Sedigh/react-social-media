import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Axios from "axios";
import ReactMarkdown from 'react-markdown';
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import ReactTooltip from "react-tooltip";

const ViewSinglePost = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState();
    const {id} = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await Axios.get(`/post/${id}`);
                console.log(response.data);
                setPost(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log('there was a problem', e);
            }
        };
        fetchPost();
    }, []);

    if (isLoading) {
        return (
            <Page title="...">
                <LoadingDotsIcon/>
            </Page>
        );
    }

    const date = new Date(post.createdDate);
    const dateFormatted = `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`;

    return (
        <Page title={post.title}>
            <div className="d-flex justify-content-between">
                <h2>{post.title}</h2>
                <span className="pt-2">
          <Link to={`/post/${post._id}/edit`} data-tip="Edit" data-for="edit" className="text-primary mr-2"><i className="fas fa-edit"></i></Link>
                    <ReactTooltip id="edit" className="custom-tooltip" />{' '}
          <Link to="#" data-tip="Delete" data-for="delete" className="delete-post-button text-danger"><i className="fas fa-trash"></i></Link>
                    <ReactTooltip id="delete" className="custom-tooltip" />
        </span>
            </div>

            <p className="text-muted small mb-4">
                <Link to={`/profile/${post.author.username}`}>
                    <img className="avatar-tiny" src={post.author.avatar} />
                </Link>
                Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {dateFormatted}
            </p>

            <div className="body-content">
                <ReactMarkdown source={post.body} allowedTypes={['paragraph', 'strong', 'emphasis', 'text', 'heading', 'list', 'listItem']} />
            </div>
        </Page>
    );
};

export default ViewSinglePost;
