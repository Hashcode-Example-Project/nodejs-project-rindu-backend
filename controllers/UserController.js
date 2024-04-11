const { User } = require ('../models/');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); 
    
    res.status(200).json({ 
      status: true,
      message: "Retrieved all users",
      data: users 
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
};

module.exports = { 
  getAllUsers
};
