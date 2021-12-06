// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import express from 'express';
import path from 'path';
import logger from 'morgan';

import indexRouter from './routes';

const PUBLIC_DIR = path.join(__dirname, '../public');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', indexRouter);

app.use(express.static(PUBLIC_DIR));

export default app;
