import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { baseUrl, end_points } from '../../api/Api_Url';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const UserDetails = () => {
    let { userId } = useParams();
    console.log("Id: ", userId);
    let api = `${baseUrl}${end_points.users}/${userId}`;
    console.log("UrlAPI: ", api);
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get(api).then(res => {
            setUser(res.data);
        })
            .catch(err => {
                console.log("Error fetching user details", err);
            });
    }, [userId, api]);
    if (!user) {
        return <div style={{ fontFamily: 'cursive' }}>Loading...</div>;
    }

    return (
        <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column'
        }}>
            <h2 style={{ marginTop: 25, color: 'blue' }}>Profile Details of the User</h2>
            <Card style={{
                marginTop: 20, backgroundColor: 'whitesmoke',
                width: '30%'
            }}>
                <h4>{user.name}</h4>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, 
                ${user.address.city}, ${user.address.zipcode}`}</p>
                <p><strong>Geo Location:</strong> {`${user.address.geo.lat}, ${user.address.geo.lng}`}</p>
            </Card>
        </div>
    );
};

export default UserDetails;
