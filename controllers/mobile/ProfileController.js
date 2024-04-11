const { User } = require('../../models/');

const getUserProfile = async (req, res) => {
  try {
    // Extract user ID from the request
    const { id } = req.user;
    
    // Fetch user profile from the database
    const userProfile = await User.findOne({ where: { id } });

    // If user profile does not exist, return 404
    if (!userProfile) {
      return res.status(404).json({
        status: 'error',
        message: 'User profile not found'
      });
    }

    // Send user profile in the response
    res.status(200).json({
      status: 'success',
      message: 'User profile retrieved successfully',
      data: userProfile
    });
  } catch (error) {
    // Handle internal server error
    console.error('Error fetching user profile:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  getUserProfile
};
