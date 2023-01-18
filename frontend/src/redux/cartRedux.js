import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    increaseQuantity: (state, action) => {
      const objIndex = state.products.findIndex(
        (product) => action.payload.product._id === product._id
      )
      state.products[objIndex].quantity += 1
      state.total += action.payload.product.price
    },
    decreaseQuantity: (state, action) => {
      const objIndex = state.products.findIndex(
        (product) => action.payload.product._id === product._id
      )
      state.products[objIndex].quantity -= 1
      state.total -= action.payload.product.price
      if (state.products[objIndex].quantity === 0) {
        state.products.splice(objIndex, 1)
      }
    },
  },
})

export const { addProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions
export default cartSlice.reducer
