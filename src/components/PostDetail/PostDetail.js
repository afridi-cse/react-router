import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

    const {postId} = useParams();

    const [post, setPost] = useState([]);

    useEffect(()=>{
        
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
        console.log("hello ")

    },[postId]);

    return (
        <div style={{border:"1px solid black",
                    margin:"10px",
                    borderRadius:"30px",
                    backgroundColor: "lightgray"}}>
                        
            <h4>This is for post detail of {postId} no post</h4>
            <h3>Post Title: {post.title}</h3>
            <p>Post: {post.body}</p>
        </div>
    );
};

export default PostDetail;