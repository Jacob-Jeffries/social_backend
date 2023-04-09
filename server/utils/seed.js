const connection = require('../config/connection')
const { User, Thought } = require('../models')

const users = [
  {
    username: 'john_doe',
    email: 'john_doe@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jane_smith',
    email: 'jane_smith@example.com',
    thoughts: [],
    friends: []
  }
]

connection.on('error', (err) => err)

connection.once('open', async () => {
  console.log('connected')

  await User.deleteMany()
  await Thought.deleteMany()

  console.table(users)

  await User.collection.insertMany(users)

  console.info('Seeding complete! 🌱')
  process.exit(0)
})
