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

const getMessageById = async (req, res) => {
  try {
    const { id } = req.params
    let messages = await Message.findByPk(id, {
      attributes: [
        "id",
        "text",
        "is_selected",
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

const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params

    // Fetch the message by id
    let message = await Message.findByPk(id,{
        attributes: [
          "id",
          "is_selected",
        ],
    });

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    // Toggle the is_selected status
    message.is_selected = !message.is_selected;

    // Save the updated message back to the database
    await message.save();

    // Send the updated message as the response
    res.status(200).json({ message: "Message status updated", data: message });

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllMessage,
  getMessageById,
  updateMessageStatus
}