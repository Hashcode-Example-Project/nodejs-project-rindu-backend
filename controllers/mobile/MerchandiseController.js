const { Merchandise } = require('../../models/');

const getAllMerchandise = async (req, res) => {
  try {
    // Fetch all merchandise from the database
    const allMerchandise = await Merchandise.findAll();

    // Send the list of merchandise in the response
    res.status(200).json({
      status: 'success',
      message: 'All merchandise retrieved successfully',
      data: {
        merchandise: allMerchandise
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

const getMerchandiseById = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch merchandise by ID from the database
    const merchandise = await Merchandise.findByPk(id);

    // Check if merchandise with the given ID exists
    if (!merchandise) {
      return res.status(404).json({
        status: 'error',
        message: 'Merchandise not found'
      });
    }

    // Send the merchandise details in the response
    res.status(200).json({
      status: 'success',
      message: 'Merchandise retrieved successfully',
      data: {
        merchandise: merchandise
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  getAllMerchandise,
  getMerchandiseById
};
