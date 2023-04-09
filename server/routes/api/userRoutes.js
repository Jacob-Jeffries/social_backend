// User Routes
const router = require('express').Router()
const { User } = require('../../models')

// Route /api/user
// GET All Users
router.get('/', async (req, res) => {
  try {
    const userData = await User.find()
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// GET Single User
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.params.id })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user
// POST Create User
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body)
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// PUT Update Single User
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
// DELETE Single User
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.findOneAndDelete({ _id: req.params.id })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// PUT to add a new friend to user's friend list
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

// Route /api/user/removeFriend:id
// PUT to  a new friend to user's friend list
router.put('/removeFriend/:id', async (req, res) => {
  try {
    const userData = await User.updateOne(
      { _id: req.params.id },
      { $pull: req.body },
      { runValidators: true, new: true }
    )
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
