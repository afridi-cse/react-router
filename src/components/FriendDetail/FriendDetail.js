import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect(()=>{

        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));

    },[]);


    return (
        <div>
            {/* <h1>This is Detail about Dosto: {params.friendId} </h1> */}
            <h1>This is Detail about Dosto: {friendId} </h1>

            <h2>Name: {friend.name}</h2>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;