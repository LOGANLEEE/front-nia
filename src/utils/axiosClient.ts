import _axios from 'axios';

export const fetch = _axios.create({ baseURL: 'http://localhost:4000/' });
