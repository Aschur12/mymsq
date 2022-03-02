import usd from './axios_req/kursesNBU.js';
const usd_kurs_NBU = document.querySelector('.usd_kurs_NBU');
usd.then((res) => {
	usd_kurs_NBU.innerHTML = res;
}) ;

