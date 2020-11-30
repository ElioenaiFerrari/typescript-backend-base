"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var _a = process.env, APP_NAME = _a.APP_NAME, PORT = _a.PORT;
var injector = {
    commons: [],
    list: function () {
        console.log(chalk_1.default.cyanBright('\nCommons'));
        console.table(this.commons);
    },
    inject: function (app, commons) {
        Object.keys(commons).map(function (key) {
            commons[key].default(app);
        });
        injector.commons = commons;
    },
};
exports.default = injector;
//# sourceMappingURL=injector.js.map