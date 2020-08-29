import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

import { useParams } from 'react-router-dom';
import Shoes from './products.json';

const ProductItem = () => {

    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <Container className="container" fixed>
            <Typography variant="h2">
                {shoe.name}
            </Typography>
            <Typography variant="h6" className="sku">
                SKU: {id}
            </Typography>
            <img src={shoe.img} alt={shoe.name} />
        </Container>
    );
}

export default ProductItem;
