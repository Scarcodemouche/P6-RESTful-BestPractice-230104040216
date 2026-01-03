const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));


app.use(express.json());

app.get('/api/items', (req, res) => {
  res.json({ message: 'API ready' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK',time: new Date(). toISOString() });
});

const productsRoutes = require('./routes/products.routes');
app.use('/api/products', productsRoutes);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);