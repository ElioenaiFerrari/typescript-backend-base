"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path_1.default.join(__dirname, 'src'),
            '@config': path_1.default.join(__dirname, 'src/config'),
            '@controllers': path_1.default.join(__dirname, 'src/controllers'),
            '@middlewares': path_1.default.join(__dirname, 'src/middlewares'),
            '@models': path_1.default.join(__dirname, 'src/models'),
            '@router': path_1.default.join(__dirname, 'src/router'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path_1.default.resolve(__dirname, 'build'),
    },
};
//# sourceMappingURL=webpack.config.js.map