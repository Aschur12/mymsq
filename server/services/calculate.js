const {kurses_usd} = require('./k_usd.js');
const {kurses_euro} = require('./k_euro');

const kursUSD = kurses_usd();
const kursEURO = kurses_euro();




module.exports = {kursUSD, kursEURO};