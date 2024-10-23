const MesaService = require('../services/mesa');

const getAll = async (req, res) => {
    const mesas = await MesaService.getAll(req, res);
    res.status(200).json(mesas);
};

module.exports = {
    getAll
};