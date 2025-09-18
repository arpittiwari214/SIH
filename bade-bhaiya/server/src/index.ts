import express from 'express';
import cors from 'cors';
import authRouter from './api/auth';
import scholarshipsRouter from './api/scholarships';
import profileRouter from './api/profile';
import applicationsRouter from './api/applications';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/scholarships', scholarshipsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/applications', applicationsRouter);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});