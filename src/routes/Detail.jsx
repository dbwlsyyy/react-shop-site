import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = (props) => {
    const { id } = useParams();
    const shoesId = props.shoes.find((a) => {
        return a.id == id;
    });

    console.log(shoesId);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${
                            shoesId.id + 1
                        }.jpg`}
                        width="100%"
                        alt="images"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoesId.title}</h4>
                    <p>{shoesId.content}</p>
                    <p>{shoesId.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
