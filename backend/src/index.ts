import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import checkJWT from './auth';

dotenv.config({
  path: resolve(__dirname) + '../.env',
});
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lifehack 2022 Server');
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/private', checkJWT, (req, res) => {
  res.json({
    message: 'hello',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});
