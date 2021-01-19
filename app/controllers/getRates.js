const xchangeService = require('../exchangeService');

const getRates = {

   async fetchRates(req, res) {
        try {
            const {base, currency} = req.body || req.params;

            // get rates query 
            const get = await xchangeService.fetchRates({base, currency});

            // get response
            if (get.status !== 200){
                res.status(500).json({message: 'oops!, unable to fetch rates', data:get.data});
            }
            if (get.status == 200){
                console.log("rates fetched...");
                res.status(200).json({message: 'success', data:get.data});
            }
        }
        catch (e) {
            console.log(e)
        };
    }
}

module.exports = getRates;
