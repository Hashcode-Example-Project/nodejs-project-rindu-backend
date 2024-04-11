const express = require('express');
const env = require('dotenv').config().parsed;
const routers = require('./routes/');
const PORT = env.PORT || 3000;
const app = express();
const cors = require('cors');

// Define CORS options
const corsOptions = {
    origin: '*', // Change this to your frontend URL in production for security
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/", routers);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
