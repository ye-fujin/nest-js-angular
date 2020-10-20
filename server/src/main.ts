declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as browserSync from 'browser-sync';
import * as path from 'path';
const cwd = path.resolve(__dirname, '../../client/dist/client');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const sync = browserSync.create();
  sync.init({
    proxy: 'localhost:3000',
    port: 4201,
    browser: 'google chrome',
    watch: true,
    files: [cwd],
  });
}
bootstrap();
