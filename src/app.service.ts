import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World New Docker Image!';
  }
   /**
  * // TODO: Make SAST scanning
  * use the .github folder files to fix this
  */
}
