import { Request, Response } from 'express';
import { staticHTML } from './html';

export default function serverRenderer() {
    return (_req: Request, res: Response) => {
        res.status(200).send(staticHTML);
    };
}
