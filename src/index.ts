import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Chunks server is up and running.');
});

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Chunks server is running on http://localhost:8080/');
});

const MONGO_URL = "mongodb+srv://CHIKANKU:CHIKANKU@atlascluster.adjjedb.mongodb.net/";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error) => console.log(error));
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


