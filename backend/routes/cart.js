const router = require('express').Router()
const Cart = require('../models/Cart')

const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require('./verifyToken')

//Create
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)

  try {
    const savedCart = await newCart.save()
    res.status(200).json(newCart)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json(`Cart  has been deleted`)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    console.log(cart)
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
