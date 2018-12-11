import axios from 'axios';

const KEY = 'AIzaSyBVGmyUtPbZq1GiV0VPLXPD7ZeuF7fVbl4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
