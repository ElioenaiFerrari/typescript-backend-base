declare const _default: {
    entry: string;
    module: {
        rules: {
            test: RegExp;
            use: string;
            exclude: RegExp;
        }[];
    };
    resolve: {
        extensions: string[];
        alias: {
            '@': string;
            '@config': string;
            '@controllers': string;
            '@middlewares': string;
            '@models': string;
            '@router': string;
        };
    };
    output: {
        filename: string;
        path: string;
    };
};
export default _default;
