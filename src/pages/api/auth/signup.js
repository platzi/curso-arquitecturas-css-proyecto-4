import bcrypt from 'bcrypt';
import User from '../../../models/User';
import dbConnect from '../../../lib/dbConnect';

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return;
  }

  const { firstName, lastName, email, password } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await  dbConnect()

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    return;
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, 10),
    isAdmin: false,
  });
  
  const user = await newUser.save();
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}