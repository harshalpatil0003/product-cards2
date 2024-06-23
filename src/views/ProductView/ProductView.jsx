import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data'
import './ProductView.css'
import StarPng from './star.png'

function ProductView() {
    const { id } = useParams()

    const selectProduct = products.find((productObject) => productObject.id === id)

    const {
        name,
        rating,
        mrp,
        price,
        description,
        img
    } = selectProduct

    return (
        <>
            <div className='product-detail-container'>
                <div className='img-container'>
                    <img src={img} alt="img" />
                </div>
                <div className='detail-container'>
                    <h1 className='product-name'>{name}</h1>
                    <div className='rating'>
                        <img src={StarPng} alt="img" className='star-png' />
                        <p> {rating} </p>
                    </div>
                    <span className='product-price'> {price} </span> <span className='product-mrp'> <del> {mrp} </del> </span>
                    <h4 className='about'>About :</h4>
                    <p className='product-description'> {description} </p>
                    
                </div>
            </div>
        </>
    )
}

export default ProductView