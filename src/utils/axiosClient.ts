import _axios from 'axios';

export const fetch = _axios.create({ baseURL: document.location.protocol + '//' + process.env.REACT_APP_BASE_URL });
