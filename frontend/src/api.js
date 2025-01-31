import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchCandidates = () => API.get('/candidates');
export const addCandidate = (candidate) => API.post('/candidates', candidate);
export const updateStatus = (id, status) => API.put(`/candidates/${id}/status`, { status });