"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var BCRYPT_SALTS = process.env.BCRYPT_SALTS;
var schema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String,
        required: true,
        set: function (password) {
            var hashSalts = bcryptjs_1.default.genSaltSync(Number(BCRYPT_SALTS));
            var hashPassword = bcryptjs_1.default.hashSync(password, hashSalts);
            password = hashPassword;
            return password;
        },
    },
});
exports.default = mongoose_1.default.model('User', schema);
//# sourceMappingURL=User.js.map