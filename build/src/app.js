"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var dotenv_1 = __importDefault(require("dotenv"));
var NODE_ENV = process.env.NODE_ENV;
dotenv_1.default.config({ path: ".env." + NODE_ENV });
require("module-alias/register");
var express_1 = __importDefault(require("express"));
var require_dir_1 = __importDefault(require("require-dir"));
var injector_1 = __importDefault(require("@/injector"));
require("@config/database");
var middlewares = require_dir_1.default('middlewares');
var routers = require_dir_1.default('router');
var app = express_1.default();
injector_1.default.inject(app, __assign(__assign({}, middlewares), routers));
injector_1.default.list();
exports.default = app;
//# sourceMappingURL=app.js.map