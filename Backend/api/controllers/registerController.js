import Registration from '../models/registerModel.js';

// Controller to handle registration submission
export const registerUser = async (req, res) => {
  const { name, email, event } = req.body;

  try {
    // Check if the user already registered with the email
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered with this email.' });
    }

    // Create new registration
    const newRegistration = new Registration({ name, email, event });
    await newRegistration.save();

    return res.status(201).json({ message: 'Registration successful', registration: newRegistration });
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred during registration', error });
  }
};

// Controller to retrieve all registrations
export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    return res.status(200).json({ registrations });
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving registrations', error });
  }
};
