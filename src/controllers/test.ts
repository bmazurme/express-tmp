import { Request, Response } from 'express';

const test = (_req: Request, res: Response) => res.status(201).send({ message: 'test' });

export default test;
