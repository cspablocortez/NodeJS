/*
Perform a GET Request with Node.js

The GET method makes a request to get a representation of a specified resource 
through a universal resource locator (URL). This is when you click on a link, 
type a URL, or access embedded content. 
Sometimes, requests are made without the user's knowledge.
*/

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


// Note that the above can also be rewritten as: ---- 
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

/*
Perform a POST Request with Node.js

The POST method is used to send data to a resource, 
changing the state of the server.
*/

// USING AXIOS LIBRARY

axios
    .post('https://whatever.com/todos', {
        todo: 'Watch the Superbowl next week'
    })
    .then(response => {
        console.log(`statusCode: ${response.statusCode}`);
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });


