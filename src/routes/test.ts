import { Router } from 'express';
import test from '../controllers/test';
import Urls from '../utils/urls';

const router = Router();

router.get(Urls.TEST, test);

export default router;
