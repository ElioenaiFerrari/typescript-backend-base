import { Request, Response, NextFunction } from 'express';
export default interface IAuthController {
    recovery(req: Request, res: Response, next: NextFunction): Promise<Response>;
    signin(req: Request, res: Response, next: NextFunction): Promise<Response>;
    signout(req: Request, res: Response, next: NextFunction): Promise<Response>;
    signup(req: Request, res: Response, next: NextFunction): Promise<Response>;
}
