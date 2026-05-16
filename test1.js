const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    const greeting = { content: 'Hello, World!' };

    response.write(JSON.stringify(greeting));
    response.end();
});

server.listen(3030, () => {
    console.log('Server running at http://localhost:3030');
});