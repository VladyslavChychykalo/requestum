import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/repositories?q=';

export const fetchRepos = (query) =>
  axios.get(`${BASE_URL}${query}&per_page=5`);
