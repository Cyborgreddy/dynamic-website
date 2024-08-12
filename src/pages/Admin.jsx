import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

const Admin = () => {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: '',
    timer: 10,
    link: ''
  });

  useEffect(() => {
    const fetchBannerSettings = async () => {
      const response = await axios.get('/api/banner-settings');
      setBannerData(response.data);
    };

    fetchBannerSettings();
  }, []);

  const updateBanner = async (updatedData) => {
    await axios.post('/api/update-banner', updatedData);
    setBannerData(updatedData);
  };

  return (
    <div className="admin">
      <Dashboard bannerData={bannerData} updateBanner={updateBanner} />
    </div>
  );
};

export default Admin;
