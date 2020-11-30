import path from 'path';

export default {
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
      '@': path.join(__dirname, 'src'),
      '@config': path.join(__dirname, 'src/config'),
      '@controllers': path.join(__dirname, 'src/controllers'),
      '@middlewares': path.join(__dirname, 'src/middlewares'),
      '@models': path.join(__dirname, 'src/models'),
      '@router': path.join(__dirname, 'src/router'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
