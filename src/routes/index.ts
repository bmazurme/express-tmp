import { Router } from 'express';
import test from './test';
import Urls from '../utils/urls';

const router = Router();

router.use(Urls.BASE, test);

export default router;
