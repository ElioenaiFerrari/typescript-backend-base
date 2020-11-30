"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("@controllers/auth.controller"));
var router = express_1.Router();
router.post('/recovery', auth_controller_1.default.recovery);
router.post('/signin', auth_controller_1.default.signin);
router.post('/signup', auth_controller_1.default.signup);
router.put('/signout', auth_controller_1.default.signout);
exports.default = (function (app) { return app.use('/auth', router); });
//# sourceMappingURL=auth.router.js.map