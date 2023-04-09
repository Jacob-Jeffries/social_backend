// Thought Routes
const router = require('express').Router()
const { Thought, User } = require('../../models')

// Route /api/thought
// GET All thoughts
router.get('/', async (req, res) => {
  try {
    const data = await Thought.find()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user/:id
// GET Single User
router.get('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({ _id: req.params.id })
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/user
// POST Create User
router.post('/', async (req, res) => {
  try {
    const thoughtData = await Thought.create(
      {
        thoughtText: req.body.thoughtText,
        username: req.body.username
      }
    )
    await User.updateOne(
      { _id: req.body.userId },
      { $push: { thoughts: thoughtData._id } },
      { runValidators: true, new: true }
    )
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
