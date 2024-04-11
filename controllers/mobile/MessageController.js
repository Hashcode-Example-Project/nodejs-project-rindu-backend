const { Message } = require('../../models/');

const getAllMessageByUserId = async (req, res) => {
  try {
    const {id} = req.user; // Assuming userId is extracted from request params

    // Fetch all messages for the given user ID from the database
    const messages = await Message.findAll({
      where: {user_id: id}
    });

    // Send the messages in the response
    res.status(200).json({
      status: true,
      message: 'All messages retrieved successfully',
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.user;
    // Create a new message in the database
    const newMessage = await Message.create({
      text,
      user_id: id
    });

    // Send the newly created message in the response
    res.status(201).json({
      status: true,
      message: 'Message sent successfully',
      data: {
        message: newMessage
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  getAllMessageByUserId,
  sendMessage
};
