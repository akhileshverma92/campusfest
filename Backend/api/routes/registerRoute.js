import express from 'express';
import { registerUser, getAllRegistrations } from '../controllers/registerController.js';

const router = express.Router();

// POST route for registration
router.post('/register', registerUser);

// GET all registrations
router.get('/registrations', getAllRegistrations);

export default router;
