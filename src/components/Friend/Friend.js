import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path);
    }
    return (
        <div>
            <h2>Name : {name}</h2>
            <Link to={'/friend/'+ id} >SHOW DETAIL </Link>
            <button onClick={showFriendDetail}>{username}  ID: {id}</button>
        </div>
    );
};

export default Friend;