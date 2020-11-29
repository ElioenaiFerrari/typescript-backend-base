import chalk from 'chalk';
import app from './app';

const { APP_NAME, HOST, PORT } = process.env;

function serverInfo() {
  const ENDPOINT = `http://${HOST}:${PORT}`;

  console.log(chalk.cyanBright('\nServer'));
  console.table({ APP_NAME, HOST, PORT, ENDPOINT });
}

app.listen(PORT, serverInfo);
