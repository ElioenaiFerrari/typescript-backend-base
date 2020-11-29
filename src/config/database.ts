import mongoose from 'mongoose';
import chalk from 'chalk';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

function onResult(status: string) {
  const color = status === 'READY' ? 'green' : 'red';

  console.log(chalk[color](`[MONGO ${status}]`));
}

mongoose.connection.on('open', onResult.bind(this, 'READY'));
mongoose.connection.on('error', onResult.bind(this, 'ERROR'));

console.log(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

export default mongoose.connect(
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  options
);
