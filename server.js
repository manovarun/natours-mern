const dotenv = require('dotenv');
const connectDB = require('./db');
const app = require('./app');
const Tour = require('./models/Tour');

//Connect DB
connectDB();

//Environment Variables
dotenv.config({ path: './config/config.env' });

//Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
