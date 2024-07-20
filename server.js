const app = require('./app');

const port = 8080; 

const outputColor = "\x1b[32m%s\x1b[0m";

app.listen(port, () => {
    console.log("Server is running on port:");
    
    console.log(outputColor, "http://localhost:" + port);
});