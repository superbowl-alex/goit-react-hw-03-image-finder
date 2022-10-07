const axios = require('axios');

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29385448-a71fcce374d47abba8b3fae94';
const options = 'image_type=photo&orientation=horizontal&safesearch=true';
export const HITS_PER_PAGE = 12;

export const fetchImagesWithQuery = async (query, page) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${query}&page=${page}&per_page=${HITS_PER_PAGE}&${options}`
  );
  return response.data;
};
