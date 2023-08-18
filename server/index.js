const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const state = {
  displayOption: 'grouping',
  groupingOption: 'status',
  sortingOption: 'priority',
};

// Get saved state
app.get('/api/state', (req, res) => {
  res.json(state);
});

// Save state
app.post('/api/state', (req, res) => {
  const newState = req.body;
  Object.assign(state, newState);
  res.json(state);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
