import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { baseUrl, end_points } from '../../api/URL_API_Pro';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
    let { productId } = useParams();
    console.log("Id: ", productId);
    let api = `${baseUrl}${end_points.products}/${productId}`;
    console.log("UrlAPI: ", api);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(api).then(res => {
            setProduct(res.data);
        })
            .catch(err => {
                console.log("Error fetching user details", err);
            });
    }, [productId, api]);
    if (!product) {
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
                <h4 style={{ color: "red" }}>{product.title}</h4>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Discount in %:</strong> {product.discountPercentage}</p>
                <p><strong>Product Rate:</strong> {product.rating}</p>
                <p><strong>Total Stock:</strong> {product.stock}</p>
                <p><strong>Tags:</strong> {product.tags.join(" , ")}</p>
                <p><strong>SKU:</strong> {product.sku}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
                <p><strong>Dimensions:</strong> {`${product.dimensions.width}, ${product.dimensions.height},
                 ${product.dimensions.depth}`}</p>
                <p><strong>Reviews:</strong> {`${product.reviews.rating}, ${product.reviews.comment}, 
                ${product.reviews.date}, ${product.reviews.reviewerName}, ${product.reviews.reviewerEmail}`}</p>
                <p><strong>Return Policy</strong>{product.returnPolicy}</p>
                <p><strong>Min Order Quantity:</strong> {product.minimumOrderQuantity}</p>
                <p><strong>Meta:</strong> {`${product.meta.createdAt}, ${product.meta.updatedAt},
                 ${product.meta.barcode}`} <br />
                    <img src={product.qrCode} alt={`${product.title}`} /></p>
                <img src={product.images} alt={product.title} />
            </Card>
        </div>
    );
};

export default ProductDetails;
