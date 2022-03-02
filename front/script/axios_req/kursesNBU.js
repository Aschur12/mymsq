import axios from 'axios';
const api = axios.create({
	baseURL: 'http://localhost:5000'
})
async function getUser() {
	try {
		const response = await api.get('/');
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
export default {getUser};

