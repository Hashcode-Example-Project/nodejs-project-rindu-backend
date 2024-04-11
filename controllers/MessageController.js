const { Message, User } = require('../models/');

const getAllMessage = async (req, res) => {
  try {
    let messages = await Message.findAll({
      attributes: [
        "id",
        "text",
        "createdAt"
      ],
      include: [{
        model: User,
        attributes: ['full_name']
      }]
    });
    
    res.status(200).json({
      status: true,
      message: 'All messages retrieved successfully',
      data: messages
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllMessage,
}