const express = require('express');
const app = express();
const port = 5000;
const {usd_kurs_nbu} = require('./services/calculate.js')
app.get('/', (req, res)=>{
	res.send(`Kurs USD ${usd_kurs_nbu}`);
});


app.listen(port, ()=>{
	console.log(`Server working on port ${port}`);
})
