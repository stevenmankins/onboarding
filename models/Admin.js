const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: { type: String },
});

mongoose.model('admins', adminSchema);
