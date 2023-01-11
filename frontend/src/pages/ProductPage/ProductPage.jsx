import React from 'react'
import styled from 'styled-components'

import { Navbar } from '../../components'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 16px;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          'http://localhost:1999/api/products/find/' + id
        )
        setProduct(res.data)
      } catch (err) {}
    }
    getProduct()
  }, [id])

  console.log(id)

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {}

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          {/* <Desc>{product.desc}</Desc> */}
          <Price>{product.price} lei</Price>

          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('dec')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('inc')}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
