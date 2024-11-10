import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl, end_points } from '../../api/Api_Url';

const User = () => {
    let api = baseUrl + end_points.users;
    let [state, setState] = useState([]);
    console.log("Api:", api);
    const getUsers = () => {
        axios.get(api).then(res => {
            console.log(res)
            setState(res.data)
        })
            .catch(err => console.log("error", err))
    }
    useEffect(() => {
        getUsers()
    }, [setState])
    return (
        <div>
            <h2>All Users</h2>
            {
                state.map(users => (
                    <div key={users.id}>
                        <ul>
                            <li>
                                <Link to={`details/${users.id}`}>
                                    <p>{users.name}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default User
