"use strict";

const _axios = require("axios").create({
    baseURL: process.env.EXCHANGE_SERVICE_URL
});

exports.fetchRates =  async (options) => {

    try {
        const exchangeService = await (_axios.get(`/latest?base=${options.base}&currency=${options.currency}`));
        return exchangeService;

    } catch (e) {
        console.log("catch error", e);
    }

};
