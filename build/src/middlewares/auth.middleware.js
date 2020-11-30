"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyAuthorizationLength(authorization) {
    if (authorization.length !== 2)
        throw new Error('unauthorized');
    return authorization;
}
function getAuthorization(req) {
    var authorization = req.headers.authorization;
    if (!authorization)
        throw new Error('unauthorized');
    return authorization;
}
function getToken(authorization) {
    var splitedAuthorization = authorization.split(' ');
    return verifyAuthorizationLength(splitedAuthorization)[1];
}
function authMiddleware(req, res, next) {
    try {
        var authorization = getAuthorization(req);
        var token = getToken(authorization);
        var user = jsonwebtoken_1.default.verify(token, '');
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
exports.default = (function (app) {
    return app.use('/protect', authMiddleware);
});
//# sourceMappingURL=auth.middleware.js.map