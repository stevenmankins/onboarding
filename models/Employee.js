const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ManagerSchema = require(./Manager);
//const BuddySchema = require(./Buddy);
//const AdminSchema = require(./Admin);
//const TicketSchema = require(./Ticket);

const employeeSchema = new Schema({
    //cwID: String,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    //gender: String,
    //hireType: String,
    //role: {type: String, required: true},
    dateStart: { type: Date, required: true },
    dateCreated: Date,
    //teamName: {type: String, required: true},
    //platform: {type: String, required: true},
    //hireStatus: String,
    buddy: String,
    //computer: String,
    //seat: String,
    //campus: String,
    //supervisorStatus: String,
    //_status: { type: mongoose.Schema.Types.ObjectId, ref: 'statuses'}
    //manager: { type: String, required: true },
    _manager: { type: mongoose.Schema.Types.ObjectId, ref: 'managers' },
    // admin: { type: String, required: true },
    _admin: { type: mongoose.Schema.Types.ObjectId, ref: 'admins' },
    //_vendor: {type: Schema.Types.ObjectId, ref: 'Vendor'}
});

mongoose.model('employees', employeeSchema);
