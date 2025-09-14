import express from 'express';
const app = express();
const port = 8080;

app.get('/', (_, res) => res.send('Hello from AWS Elastic Beanstalk Express.js sample app!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
