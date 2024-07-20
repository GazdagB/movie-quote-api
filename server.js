const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config({ path: './config.env' });

// Use the PORT variable from the environment, default to 8080 if not set
const port = process.env.PORT || 8080;

const uri = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

console.log(uri);


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connection successful");
}).catch(err => {
    console.error("Database connection error:", err);
});

const outputColor = "\x1b[32m%s\x1b[0m";

app.listen(port, () => {
    console.log("Server is running on port:");
    console.log(port);
    
    console.log(outputColor, "http://localhost:" + port);
});