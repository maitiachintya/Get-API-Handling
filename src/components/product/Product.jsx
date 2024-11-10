import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl, end_points } from '../../api/URL_API_Pro';

const Product = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            axios.get(baseUrl + end_points.products)
                .then(res => {
                    console.log("API Response:", res.data);
                    if (Array.isArray(res.data.products)) {
                        console.log("Setting state with:", res.data.products);
                        setState(res.data.products);
                    } else {
                        console.log("Unexpected response format:", res.data);
                    }
                })
                .catch(err => {
                    console.log("Error:", err);
                });
        };
        getProducts();
    }, []);

    return (
        <div>
            <h2>All Products</h2>
            {
                state.length > 0 ? (
                    state.map(products => (
                        <div key={products.id}>
                            <ul>
                                <li>
                                    <Link to={`informations/${products.id}`}>
                                        <p>{products.title}</p>
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
