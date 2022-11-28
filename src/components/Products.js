import React from 'react';
import furniture from '../api/furniture';

const Products = () => {
  return (
    <div className='products'>
      <h3 className='title_products'>Our Popular Furniture</h3>
      <p><b>All of our furniture uses the best materials and choices for our customers.<br />
        All of our furniture uses the best materials and choices for our customers.</b></p>
      <div className='box'>
        {furniture.map((elem, index) => (
          <div className='box_list' key={index}>
            <div className='image_wrapper'>
              <img src={elem.imgUrl} alt='img' />
            </div>
            <div className='box_info'>
              <h3>{elem.title}</h3>
              <div className='price'><span>Price {elem.price}$</span>
                <button className='buy'>Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;