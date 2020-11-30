"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var chalk_1 = __importDefault(require("chalk"));
var _a = process.env, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_NAME = _a.DB_NAME, DB_USER = _a.DB_USER, DB_PASS = _a.DB_PASS;
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
function onResult(status) {
    var color = status === 'READY' ? 'green' : 'red';
    console.log(chalk_1.default[color]("[MONGO " + status + "]"));
}
mongoose_1.default.connection.on('open', onResult.bind(this, 'READY'));
mongoose_1.default.connection.on('error', onResult.bind(this, 'ERROR'));
console.log("mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME);
exports.default = mongoose_1.default.connect("mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME, options);
//# sourceMappingURL=database.js.map