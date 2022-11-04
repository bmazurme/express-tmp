import express from 'express';
import { errors } from 'celebrate';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { config as dotEnvConfig } from 'dotenv';
import cors from 'cors';
import { requestLogger, errorLogger } from './middlewares/logger';
import corsOptions from './utils/corsOptions';

import index from './routes/index';
import NotFoundError from './errors/NotFoundError';

import limiter from './utils/limiter';

import errorHandler from './middlewares/errorHandler';
import Urls from './utils/urls';

dotEnvConfig();

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(limiter);
app.use(helmet());

app.use(Urls.BASE, index);
app.use('*', () => {
  throw new NotFoundError('HTTP 404 Not Found');
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
