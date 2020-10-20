import { Injectable, NestMiddleware } from '@nestjs/common';
import * as path from 'path';
import { Request, Response } from 'express';

const RESTRICTED_EXTENSIONS = [
  'html',
  'js',
  'css',
  'ico',
  'svg',
  'png',
  'jpg',
  'jpeg',
  'gif',
  'woff',
  'woff2',
  'otf',
  'ttf',
];

const ROOT_PATH = path.resolve(__dirname, '../../client/dist/client');

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): any {
    const { baseUrl } = req;
    if (RESTRICTED_EXTENSIONS.some(ext => baseUrl.indexOf(ext) !== -1)) {
      res.sendFile(baseUrl, { root: ROOT_PATH });
    } else if (baseUrl.indexOf(process.env.API_PREFIX) !== -1) {
      next();
    } else {
      res.sendFile('index.html', { root: ROOT_PATH });
    }
  }
}
