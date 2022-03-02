const express = require('express');
const app = express();
const port = 5000;
const {kursUSD, kursEURO} = require('./services/calculate.js')
app.get('/', (req, res)=>{
	res.send(`${kursUSD}`);
});


app.listen(port, ()=>{
	console.log(`Server working on port ${port}`);
})
