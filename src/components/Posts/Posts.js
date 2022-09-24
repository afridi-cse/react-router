import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Posts.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));

    },[]);



    return (
        <div>
            <h3>Every facebook post ever had: {posts.length}</h3>

            <div className='posts'>
                {
                    posts.map(post => <Link 
                        key={post.id}
                        to={`/posts/${post.id}`}
                        >{post.id}</Link>)
                }
               
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;