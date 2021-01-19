const { Router } = require('express');
const ratesValidation = require('../app/middleware/rates');
const getRates = require('../app/controllers/getRates');

// configure route 
const getRouter = Router();

getRouter.get('/api/rates', ratesValidation.checkRates, getRates.fetchRates);

module.exports = getRouter;
