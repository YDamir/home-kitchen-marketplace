import axios from 'axios';

const useApi = () => {
  const apiClient = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const fetchDishes = async () => {
    const response = await apiClient.get('/dishes');
    return response.data;
  };

  return { fetchDishes };
};

export default useApi;