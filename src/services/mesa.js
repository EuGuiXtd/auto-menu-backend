const {Mesa} = require('../../models');

const getAll = async (req, res) => {
    try {
        const mesas = await Mesa.findAll();
        res.status(200).json(mesas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAll
};