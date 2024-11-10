import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { baseUrl, end_points } from '../../../api/BaseApi_UrlProd';

const ProductItemDetails = () => {
    let { itemId } = useParams();
    // console.log("Id: ", itemId);
    console.log("ItemId from Params:", itemId);
    let api = `${baseUrl}${end_points.items}/${itemId}`;
    // console.log("UrlAPI: ", api);
    console.log("Constructed API URL:", api);
    const [item, setItem] = useState(null);
    useEffect(() => {
        axios.get(api).then(res => {
            setItem(res.data);
        })
            .catch(err => {
                console.log("Error fetching user details", err);
            });
    }, [itemId, api]);
    if (!item) {
        return <div style={{ fontFamily: 'cursive' }}>Loading...</div>;
    }


    return (
        <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column'
        }}>
            <h2 style={{ marginTop: 25, color: 'blue' }}>Full Details of the Product</h2>
            <Card style={{
                marginTop: 20, backgroundColor: 'whitesmoke',
                width: '45%', padding: 20, height: '100%'
            }}>
                <h4 style={{ color: "red" }}>{item.title}</h4>
            </Card>
        </div>
    );
};

export default ProductItemDetails;
