import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import items from './routes/api/items';

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoUri;

// TODO convert to async await.
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDb Connected.'))
    .catch(error => console.error(error));

app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
