/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/newamazona', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const __dirname = path.resolve();
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
