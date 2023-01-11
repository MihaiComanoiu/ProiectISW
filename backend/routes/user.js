const User = require('../models/User')
require('dotenv').config()
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken')

const router = require('express').Router()

router.put('/:id', verifyToken, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(`User ${deletedUser.username} has been deleted`)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET USER
router.get('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    console.log(others)
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET ALL UESERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
