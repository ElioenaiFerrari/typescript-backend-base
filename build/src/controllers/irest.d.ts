import { Request, Response, NextFunction } from 'express';
export default interface IRestController {
    destroy(req: Request, res: Response, next: NextFunction): Promise<Response>;
    index(req: Request, res: Response, next: NextFunction): Promise<Response>;
    show(req: Request, res: Response, next: NextFunction): Promise<Response>;
    store(req: Request, res: Response, next: NextFunction): Promise<Response>;
    update(req: Request, res: Response, next: NextFunction): Promise<Response>;
}
