const { User } = require('../../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    
    if (!full_name) {
      throw new Error("fullname tidak boleh kosong.");
    }
    if (!email) {
      throw new Error("email tidak boleh kosong.");
    }
    if (!password) {
      throw new Error("password tidak boleh kosong.");
    }

    const user = await User.create({
      full_name,
      email,
      password,
      role: '2'
    })

    res.status(201).json({
      status: true,
      message: 'User created successfully',
      data: {
        user: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
          role: user.role
        }
      }
    });

  } catch (error) {

    res.status(400).json({
      status: false,
      message: error.message
    });
  }
};


const login = async (req, res) => {
  
  const { email, password } = req.body 

  try {

    if (!email) {
      throw new Error("email tidak boleh kosong.");
    }
    
    if (!password) {
      throw new Error("password tidak boleh kosong.");
    }

    const user = await User.findOne({ where : { email }})

    if (!user) {
      throw new Error("User not found");
    }

      const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      return res.status(401).json({
        status: false,
        message: 'Bad Credentials',
      });
    }

    let payload = {
      id: user.id,
      email: user.email,
      role: user.role
    }

    const access_token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

    res.status(200).json({
      status: true,
      message: 'Login successful',
      access_token: access_token
    });
  
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
}

module.exports = {
  register,
  login
}