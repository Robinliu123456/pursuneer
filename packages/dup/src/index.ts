#!/usr/bin/env node

import { CAC } from 'cac';
import pkgInfo from '../package.json';

const cli = new CAC();

export default function runner() {
  cli
    .command('new [name]', 'create a new command')
    .option('-f, --force', 'enforce', {
      default: false,
    })
    .action((...args) => {
      console.log(args);
    });

  cli.version(pkgInfo.version);
  cli.help();
  cli.parse(process.argv);
}

runner();
