const mongoose = require('mongoose');

const  appointmentSchema= new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    date: Date,
    time: String,
})

const AppointmentModel =  mongoose.model('Appointments', appointmentSchema);
module.exports = AppointmentModel;