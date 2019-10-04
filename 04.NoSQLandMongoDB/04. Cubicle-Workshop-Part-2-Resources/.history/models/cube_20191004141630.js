const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    name: {
        type: String,
        required: true,
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
    accessories: [{ type: mongoose.SchemaTypes.ObjectId }]
});

cubeSchema.methods.getDescription = function() {
    return this.description;
};

module.exports = mongoose.model('Cube', cubeSchema);