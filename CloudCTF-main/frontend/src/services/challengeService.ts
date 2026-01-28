import axios from 'axios';

export const getChallenges = async () => {
    return axios.get('/api/v1/challenges');
};
