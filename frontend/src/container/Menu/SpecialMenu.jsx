import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'

const SpecialMenu = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:1999/api/products')
        setProducts(res.data)
      } catch (err) {}
    }
    getProducts()
  }, [])
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading tittle='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <div className='app__specialMenu_menu_items'>
            {products.slice(0, 4).map((product, index) => (
              <MenuItem
                key={product.title + index}
                title={product.title}
                price={product.price}
                tags={product.tags}
              />
            ))}
          </div>
        </div>
        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu img' />
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <div className='app__specialMenu_menu_items'>
            {products.slice(4, 8).map((product, index) => (
              <MenuItem
                key={product.title + index}
                title={product.title}
                price={product.price}
                tags={product.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Link to='/menu'>
          <button type='button' className='custom__button'>
            View More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SpecialMenu
