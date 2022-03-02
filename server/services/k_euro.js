var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function kurses_euro () {
	let kurs_euro;
	const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
	xhr.open('get', url, false);
	xhr.send();
	let kurs_usd_arr = JSON.parse(xhr.responseText);
	kurs_usd_arr.map((kurs) => {
		if (kurs['r030'] == '978') {
			kurs_euro = kurs['rate'];
		}
	})
	return kurs_euro;
};
module.exports = {kurses_euro};