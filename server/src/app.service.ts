import { Injectable } from '@nestjs/common';

interface ISettings {
  title: string;
}

@Injectable()
export class AppService {
  private title = 'NestAngular';
  root(): string {
    return `Hello World, ${this.title}!`;
  }
  settings(): ISettings {
    return { title: this.title };
  }
}
