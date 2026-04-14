import express from 'express';
import sessionRoutes from './routes/session.routes.js';

const app = express();

app.use('/api', sessionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});