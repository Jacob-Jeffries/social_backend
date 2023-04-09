// User Routes
const router = require('express').Router()
const { User } = require('../../models')

// Route /api/user
// Get All Users
router.get('/', async (req, res) => {
  try {
    const userData = await User.find()
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// Get Single User
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({_id: req.params.id })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user
// Create User
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body)
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// Update Single User
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// Delete Single User
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.findOneAndDelete({_id: req.params.id })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router
