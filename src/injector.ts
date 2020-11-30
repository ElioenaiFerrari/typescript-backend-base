import chalk from 'chalk';
import express from 'express';
const { APP_NAME, PORT } = process.env;

const injector = {
  commons: [],

  list() {
    console.log(chalk.cyanBright('\nCommons'));
    console.table(this.commons);
  },

  inject(app: express.Application, commons: any) {
    Object.keys(commons).map(function (key: string) {
      commons[key].default(app);
    });

    injector.commons = commons;
  },
};

export default injector;
