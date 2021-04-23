import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Axios from "axios";
import LoadingDotsIcon from "./LoadingDotsIcon";

const ProfilePosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source();

        const fetchPosts = async () => {
            try {
                const response = await Axios.get(`/profile/${username}/posts`, {cancelToken: ourRequest.token});
                console.log(response.data);
                setPosts(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log('there was a problem or the request was cancelled', e);
            }
        };
        fetchPosts();

        return () => {
            ourRequest.cancel();
        };
    }, []);

    if (isLoading) return <LoadingDotsIcon/>;

    return (
        <div className="list-group">
            {posts.map(post => {
                const date = new Date(post.createdDate);
                const dateFormatted = `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`;

                return (
                    <Link to={`/post/${post._id}`} className="list-group-item list-group-item-action" key={post._id}>
                        <img className="avatar-tiny" src={post.author.avatar} />
                             <strong>{post.title}</strong>
                        {' '}
                        <span className="text-muted small">on {dateFormatted}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProfilePosts
