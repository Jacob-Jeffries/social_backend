const { Schema, model } = require('mongoose')

// Schema to create User Model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

// Creating Virtual
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const User = model('User', userSchema)

module.exports = User