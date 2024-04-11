const { User } = require('../models/');

const resgister = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {

    const user = await User.findOne({ email: email})

    res.send(200).json({user})
    
  } catch (error) {
    
  }
}

module.exports = {
  register,
  login
}