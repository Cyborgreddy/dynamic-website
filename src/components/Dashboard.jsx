import React, { useState } from 'react';

const Dashboard = ({ bannerData, updateBanner }) => {
  const [isVisible, setIsVisible] = useState(bannerData.isVisible);
  const [description, setDescription] = useState(bannerData.description);
  const [timer, setTimer] = useState(bannerData.timer);
  const [link, setLink] = useState(bannerData.link);

  const handleUpdate = () => {
    updateBanner({
      isVisible,
      description,
      timer,
      link
    });
  };

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <label>
        Banner Visibility:
        <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Timer (seconds):
        <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />
      </label>
      <label>
        Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <button onClick={handleUpdate}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
