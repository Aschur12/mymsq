export function kurses_usd () {
	let kurs_usd;
	const xhr = new XMLHttpRequest();
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
