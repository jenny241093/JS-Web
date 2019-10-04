const mongoose = require('mongoose');
const accessorySchema = new mongoose.Schema({
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
    cubes: [{ type: mongoose.SchemaTypes.ObjectId }]

});
module.exports = mongoose.model('Accessory', accessorySchema);