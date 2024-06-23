import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


function ProductCard({ id, name, rating, mrp, price, description, img } ) {
  return (
   <>
       <div className='product-card'>
        <img src={img} alt='img' className='product-img'/>
        <p className='product-name'> {name} </p>

        <span className='price'> {price} </span>
        <Link to={`/product/${id}`} className='btn'>Buy Now</Link>
    </div>
   </>
  )
}

export default ProductCard