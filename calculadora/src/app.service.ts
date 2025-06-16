import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('log!');
    console.debug('debug!');
    console.warn('warn!');
    console.info('info!');
    console.error('error!');
    return 'Hello World!';
  }
}
