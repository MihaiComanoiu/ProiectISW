const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection successfully'))
  .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT || 5000, () => console.log(`Server running on PORT ${PORT}`))
