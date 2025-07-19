const Donar = require('../models/donar');

exports.createDonar = async (req, res) => {
  try {
    const donar = new Donar(req.body);
    await donar.save();
    res.status(201).json({ message: 'Donar created successfully', donar });
  } catch (error) {
    console.error('Error creating donar:', error);
    res.status(400).json({ message: 'Failed to create donar', error: error.message });
  }
};

exports.getAllDonars = async (req, res) => {
  try {
    const donars = await Donar.find().sort({ date: -1 });
    res.status(200).json(donars);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch donars', error: error.message });
  }
};


exports.getDonarById = async (req, res) => {
  try {
    const donar = await Donar.findById(req.params.id);
    if (!donar) {
      return res.status(404).json({ message: 'Donar not found' });
    }
    res.status(200).json(donar);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donar', error: error.message });
  }
};


exports.verifyDonar = async (req, res) => {
  try {
    const updatedDonar = await Donar.findByIdAndUpdate(
      req.params.id,
      { isVerified: true },
      { new: true }
    );
    if (!updatedDonar) {
      return res.status(404).json({ message: 'Donar not found' });
    }
    res.status(200).json({ message: 'Donar verified', donar: updatedDonar });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying donar', error: error.message });
  }
};

// Delete a donar
exports.deleteDonar = async (req, res) => {
  try {
    const deleted = await Donar.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Donar not found' });
    }
    res.status(200).json({ message: 'Donar deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting donar', error: error.message });
  }
};
