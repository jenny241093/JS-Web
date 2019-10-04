const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({

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
    imageUrl: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true
    },
    accessories: {
        type: ObjectId
    }
});

cubeSchema.methods.getDescription = function() {
    return this.description;
};

module.exports = mongoose.model('Cube', cubeSchema);