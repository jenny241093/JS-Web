const mongoose = require('mongoose');
const accessorySchema = new mongoose.Schema({
    id: { type: ObjectId },
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
    accessories: {
        type: ObjectId
    }
});
module.exports = mongoose.model('Accessory', accessorySchema);