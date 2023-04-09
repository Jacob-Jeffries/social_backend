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
  },
  {
    username: 'peter_parker',
    email: 'peter_parker@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'clark_kent',
    email: 'clark_kent@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'tony_stark',
    email: 'tony_stark@example.com',
    thoughts: [],
    friends: []
  }
]

const thoughts = [
  {
    thoughtText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros nec vestibulum sodales. Aliquam hendrerit diam ipsum, vel mollis lectus sodales in. Maecenas non lorem non ex cursus molestie vel vel velit.',
    username: 'john_doe',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'john_doe'
      },
      {
        reactionBody: 'Meh, not my thing',
        username: 'jane_smith'
      },
      {
        reactionBody: 'This is amazing!',
        username: 'peter_parker'
      },
      {
        reactionBody: 'I totally agree',
        username: 'clark_kent'
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith'
      }
    ]
  },
  {
    thoughtText: 'In posuere pharetra massa eget consectetur. Quisque pharetra vestibulum erat id finibus. Aenean et magna nisl. Proin vitae ullamcorper elit. Etiam placerat urna vitae sagittis pellentesque. Donec euismod, velit vel feugiat euismod, ante ante tincidunt tortor, eu posuere ipsum nunc ac tellus.',
    username: 'jane_smith',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'john_doe'
      },
      {
        reactionBody: 'Meh, not my thing',
        username: 'jane_smith'
      },
      {
        reactionBody: 'This is amazing!',
        username: 'peter_parker'
      },
      {
        reactionBody: 'I totally agree',
        username: 'clark_kent'
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith'
      }
    ]
  },
  {
    thoughtText: 'Nam pretium, nulla a pulvinar interdum, magna nunc lobortis nulla, nec ultrices turpis purus ac ex. Sed eget justo mi. Sed auctor felis ut augue eleifend, vel posuere elit convallis. Sed fermentum, ipsum euismod faucibus tempor, lectus leo rhoncus sem, ac consequat quam enim in lorem.',
    username: 'peter_parker',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'john_doe'
      },
      {
        reactionBody: 'Meh, not my thing',
        username: 'jane_smith'
      },
      {
        reactionBody: 'This is amazing!',
        username: 'peter_parker'
      },
      {
        reactionBody: 'I totally agree',
        username: 'clark_kent'
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith'
      }
    ]
  },
  {
    thoughtText: 'Nunc gravida, magna a dictum luctus, mauris turpis aliquet nulla, at bibendum est dolor in lorem. Duis euismod lectus non libero pharetra, sit amet molestie dolor bibendum. In sed tellus mauris. Vestibulum aliquam nulla felis, euismod luctus est luctus vel.',
    username: 'clark_kent',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'john_doe'
      },
      {
        reactionBody: 'Meh, not my thing',
        username: 'jane_smith'
      },
      {
        reactionBody: 'This is amazing!',
        username: 'peter_parker'
      },
      {
        reactionBody: 'I totally agree',
        username: 'clark_kent'
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith'
      }
    ]
  },
  {
    thoughtText: 'Proin vehicula dolor a malesuada scelerisque. Aenean consectetur, enim ac congue malesuada, purus sem malesuada nibh, a aliquet sapien lacus vel urna. Duis pellentesque euismod justo, nec sollicitudin massa finibus vitae.',
    username: 'tony_stark',
    reactions: [
      {
        reactionBody: 'I love it!',
        username: 'john_doe'
      },
      {
        reactionBody: 'Meh, not my thing',
        username: 'jane_smith'
      },
      {
        reactionBody: 'This is amazing!',
        username: 'peter_parker'
      },
      {
        reactionBody: 'I totally agree',
        username: 'clark_kent'
      },
      {
        reactionBody: 'No way, not for me',
        username: 'dave_smith'
      }
    ]
  }
]

connection.on('error', (err) => err)

connection.once('open', async () => {
  console.log('connected')

  await User.deleteMany()
  await Thought.deleteMany()

  console.table(users)

  await User.collection.insertMany(users)
  await Thought.collection.insertMany(thoughts)

  console.info('Seeding complete! 🌱')
  process.exit(0)
})
