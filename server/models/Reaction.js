const { Schema } = require('mongoose')

// Schema to create Reaction Model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId
    },
    reactionBody: {
      type: String,
      require: true,
      maxLength: 280
    },
    username: {
      type: String,
      require: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

reactionSchema
  .virtual('createdAtFormatted')
  // Getter
  .get(function () {
    return this.createdAt.toLocalString()
  })

module.exports = reactionSchema
