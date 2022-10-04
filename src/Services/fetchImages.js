const axios = require('axios');
// My API key is stored in a constant

const fetchImagesWithQuery = async (query, page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  const API_KEY = '29385448-a71fcce374d47abba8b3fae94';
  const HITS_PER_PAGE = 12;

  const response = await axios.get(
    `/?key=${API_KEY}&q=${query}&page=${page}&per_page=${HITS_PER_PAGE}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  console.log(response);
  return response.data.hits;
};

export default fetchImagesWithQuery;
