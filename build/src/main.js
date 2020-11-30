"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var app_1 = __importDefault(require("./app"));
var _a = process.env, APP_NAME = _a.APP_NAME, HOST = _a.HOST, PORT = _a.PORT;
function serverInfo() {
    var ENDPOINT = "http://" + HOST + ":" + PORT;
    console.log(chalk_1.default.cyanBright('\nServer'));
    console.table({ APP_NAME: APP_NAME, HOST: HOST, PORT: PORT, ENDPOINT: ENDPOINT });
}
app_1.default.listen(PORT, serverInfo);
//# sourceMappingURL=main.js.map