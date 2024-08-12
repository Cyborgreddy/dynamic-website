import axios from 'axios';

export const fetchBannerSettings = async () => {
  const response = await axios.get('/api/banner-settings');
  return response.data;
};

export const updateBannerSettings = async (data) => {
  await axios.post('/api/update-banner', data);
};
