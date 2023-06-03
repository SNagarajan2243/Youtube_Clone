const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51fdb35a13msh5a5eae7dd295315p10c141jsn7d8db5030106',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}
export const fetchFromAPI = async(url) => {
	const response = await fetch(`${BASE_URL}${url}&maxResults=50`, options)
	return await response.json()
}