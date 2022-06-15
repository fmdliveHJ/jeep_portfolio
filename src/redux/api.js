import axios from 'axios';

export const fetchFlickr = async (opt) => {
	console.log(opt);
	const key = 'e348bed2bd80ff66c01682c0c396ac50';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json`;
	}
	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
	}

	return await axios.get(url);
};

export const fetchYoutube = async () => {
	const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
	const playlist = 'PLooTX0MOEe6OAucsxOqZTV72g8pieLz9z';
	const num = 9;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	return await axios.get(url);
};

export const fetchMember = async () => {
	const url = `${process.env.PUBLIC_URL}/DB/members.json`;

	return await axios.get(url);
};