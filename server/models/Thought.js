const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

// Schema to create Thought Model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      require: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })
  .virtual('createdAtFormatted')
  // Getter
  .get(function () {
    return this.createdAt.toLocalString()
  })

const Thought = model('Thought', thoughtSchema)

module.exports = Thought
