var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function kurses_usd () {
	let kurs_usd;
	const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
	xhr.open('get', url, false);
	xhr.send();
	let kurs_usd_arr = JSON.parse(xhr.responseText);
	kurs_usd_arr.map((kurs) => {
		if (kurs['r030'] == '840') {
			kurs_usd = kurs['rate'];
		}
	})
	return kurs_usd;
};
module.exports = {kurses_usd};