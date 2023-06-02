const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1f14b80557msh53754ea925c7496p1e9f6bjsn443eb8e3cf60',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// export const fetchFromAPI = async(url) => {
//     console.log(url)
//     const {data} = await fetch(`${BASE_URL}/${url}&maxResults=50`,options)
//     console.log(data)
//     return data;
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f14b80557msh53754ea925c7496p1e9f6bjsn443eb8e3cf60',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}
export const fetchFromAPI = async(url) => {
	const response = await fetch(url, options)
	return await response.json()
}