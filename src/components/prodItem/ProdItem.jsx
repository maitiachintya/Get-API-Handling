import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl, end_points } from '../../api/BaseApi_UrlProd';

const Product = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const getItems = () => {
            let api = baseUrl + end_points.items+end_points.categories;
            console.log("api", api);
            axios.get(api)
                .then(res => {
                    console.log("API Response:", res.data);
                    setState(res.data);
                    // if (Array.isArray(res.data.items)) {
                    //     console.log("Setting state with:", res.data.items);
                    //     setState(res.data.items);
                    // } else {
                    //     console.log("Unexpected response format:", res.data);
                    // }
                })
                .catch(err => {
                    console.log("Error:", err);
                });
        };
        getItems();
    }, []);

    console.log("State values",state);
    return (
        <div>
            <h2>All Items</h2>
            {
                state.length > 0 ? (
                    state.map(items => (
                        <div key={items.id}>
                            <ul>
                                <li>
                                    <Link to={`briefs/${items.id}`}>
                                        <p>{items}</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )
            }
        </div>
    );
}

export default Product;
