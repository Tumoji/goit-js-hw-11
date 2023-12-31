import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '41018255-2956d420614a58465a44a1bb0';

export default class PixabayApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
  }

  async getImages(query, page) {
    try {
      const response = await axios.get(ENDPOINT, {
        params: {
          key: API_KEY,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          page: page,
          per_page: 40,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}