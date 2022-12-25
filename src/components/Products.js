import React from 'react';
import { productsArray } from '../api/furniture';
import ProductCart from './ProductCart';

const Products = () => {
  return (
    <div className='products'>
      <h3 className='title_products'>Our Popular Furniture</h3>
      <div className='box'>
        {productsArray.map((elem, index) => (
          <div key={index}>
            <ProductCart product={elem} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;