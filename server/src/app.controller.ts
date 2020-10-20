import { ISettings } from './app.interface';
import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('settings')
  settings(): ISettings {
    return this.appService.settings();
  }
}
