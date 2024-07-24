const Doctor = require('../models/doctor');

// Example function to fetch all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).send('Error fetching doctors');
    }
};

// Add other CRUD operations as needed