const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const expenseSchema = new Schema({

    merchant: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },

    total: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    report: {
        type: ObjectId,
        required: true
    },

    user: {
        type: ObjectId,
        ref: 'User'
    }

});

module.exports = new Model('Expense', expenseSchema);