import React from 'react';
import { Col } from 'react-bootstrap';

const Card = ({ shoes, i }) => {
    console.log(i);
    return (
        <Col>
            <img
                alt={`상품${i}`}
                src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                width="80%"
            />
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
        </Col>
    );
};

export default Card;
