import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Navbar } from '../../components'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'

import axios from 'axios'

const KEY =
  'pk_test_51LglyeAVdX3z1oRmqZQWYaD7kh8jbkzvMeBdof0LVbjWixMB0NM4bP9Dtr507kRgpls0NhusJh3MUKxok6BE4Mza004f7au6mz'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  console.log('Cart', cart)

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:1999/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        )
        navigate('/success', { state: res.data })
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken, cart.total, navigate])

  console.log(cart.products[0].price)

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Order</Title>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() => {
                        dispatch(decreaseQuantity({ product }))
                      }}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add
                      onClick={() => {
                        dispatch(increaseQuantity({ product }))
                      }}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                     {product.price * product.quantity} lei
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>5.90 lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5.90 lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} lei</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='Enter your data'
              image='https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=600'
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total} lei`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart
