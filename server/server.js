const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/update-banner', (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  const query = 'UPDATE banner_settings SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
  db.query(query, [description, timer, link, isVisible], (err, result) => {
    if (err) throw err;
    res.send('Banner settings updated');
  });
});

app.get('/api/banner-settings', (req, res) => {
  const query = 'SELECT * FROM banner_settings WHERE id = 1';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
