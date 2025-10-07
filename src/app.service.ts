import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo!';
  }

  getAuthor(): string {
    return 'Marianella Jerez - Nequi: 3115858761'
  }

  getStatus(): { status: string, time : Date | string } {
    return { status: 'Ok', time : new Date().toISOString()};
  }
}
