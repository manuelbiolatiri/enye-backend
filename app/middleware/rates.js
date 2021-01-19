const ratesValidation = {
    
    checkRates(req, res, next) {
        const { base, currency } = req.body || req.params;

        if (!base) {
            return res.status(400).json({
                status: 'error',
                error: 'base is required'
            });
        };

        if (!Array.isArray(currency)) {
            return res.status(400).json({
                status: 'error',
                error: 'currency is not an array'
            });
        };
        if (!currency) {
            return res.status(400).json({
                status: 'error',
                error: 'currency is required'
            });
        };
        
        next();
    }
};

module.exports = ratesValidation;