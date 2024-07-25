const express = require('express');
const bodyParser = require('body-parser');
const applianceRoutes = require('./routes/applianceRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/appliances', applianceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
