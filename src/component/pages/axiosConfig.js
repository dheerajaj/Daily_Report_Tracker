import axios from 'axios';

 

axios.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        config.headers['Authorization'] = `Token ${authToken}`;
    }
    return config;
});

 

export default axios;