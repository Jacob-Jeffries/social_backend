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

// Route /api/thought/:id
// GET Single thought
router.get('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({ _id: req.params.id })
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/thought
// POST Create Thought & add to user entry
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

// Route /api/thought/:id
// PUT Update Single Thought
router.put('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.updateOne(
      { _id: req.params.id },
      { $set: req.body, updatedAt: new Date() },
      { runValidators: true, new: true }
    )
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/thought/:id
// DELETE Single Thought
router.delete('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id })
    await User.updateOne(
      { username: thoughtData.username },
      { $pull: { thoughts: thoughtData._id } },
      { runValidators: true, new: true }
    )
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Route /api/thought/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
    res.status(200).json(thoughtData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
