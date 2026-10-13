const Appointment = require("../models/Appointment")

const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);

        res.status(201).json({
            success: true,
            message: "Appointment request submitted successfully",
            appointment,
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create appointment",
            error: error.message,
        });
    }
} 
module.exports = {
  createAppointment,
};