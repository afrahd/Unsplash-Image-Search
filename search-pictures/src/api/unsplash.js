import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID Dby6O0u8QCcjQPyjof-Z7tLjFtqyMp1cRa9wi8dW7nI'} 
});

