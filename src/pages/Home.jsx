import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import axios from 'axios';

const Home = () => {
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

  return (
    <div className="home">
      <Banner
        isVisible={bannerData.isVisible}
        description={bannerData.description}
        link={bannerData.link}
        timer={bannerData.timer}
      />
    </div>
  );
};

export default Home;
