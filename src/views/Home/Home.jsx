import React from 'react'
import products from './../../data'
import ProductCard from './../../components/ProductCard/ProductCard'
import './Home.css'

function Home() {
    return (
        <>
            <h1 className='main-title'>Air Jordans</h1>
            <div className='product-container'>
                {
                    products.map((productObject, i) => {
                        const {
                            id,
                            name,
                            rating,
                           
                            price,
                            description,
                            img
                        } = productObject

                        return (
                            <ProductCard
                                key={i}
                                id={id}
                                name={name}
                                rating={rating}
                               
                                price={price}
                                description={description}
                                img = {img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home