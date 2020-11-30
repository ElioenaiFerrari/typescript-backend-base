import express from 'express';
declare const injector: {
    commons: never[];
    list(): void;
    inject(app: express.Application, commons: any): void;
};
export default injector;
