import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Order = () => {
    const {name} = useParams()
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {name} Product</h1>
            <p>Want a <Link to="/home">different product?</Link> </p>
        </div>
    );
};

export default Order;