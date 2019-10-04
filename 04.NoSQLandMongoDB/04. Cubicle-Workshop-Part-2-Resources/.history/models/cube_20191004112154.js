const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    id: { type: ObjectId },
    name: {
        type: String,
        required: true,
        // validate: {
        //   validator: function (v) {
        //     return /\d{3}-\d{3}-\d{4}/.test(v);
        //   },
        //   message: props => `${props.value} is not a valid phone number!`
        // },
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: String,
    difficultyLevel: Number
});

cubeSchema.methods.getDescription = function() {
    return this.description;
};

module.exports = mongoose.model('Cube', cubeSchema);