// Perform a GET Request

// Using Axios library
const axios = require('axios');

axios
    .get('https://example.com/todos')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });


// Note that the above can also be rewritten as:
axios
    .get('https://example.com/todos')
    .then(function (response) {
        console.log(`statusCode: ${response.status}`);
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });


// Using only standard Node.js modules (DEFAULT WAY)
const https = require('https');

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/todos',
    method: 'GET'
};

const request = https.request(options, response => {
    console.log(`statusCode: ${response.statusCode}`);

    response.on('data', d => {
        process.stdout.write(d);
    });
});

request.on('error', error => {
    console.error(error);
});

request.end();