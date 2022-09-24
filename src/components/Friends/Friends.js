import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(()=> {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])



    return (
        <div>
            <h2>Hello friend how are youuuu....???</h2>
            <small>Please give me some money {friends.length}</small>

            {
                friends.map((friend) => <Friend friend={friend} key={friend.id}></Friend>)
            }

        </div>
    );
};

export default Friends;