import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World New Docker Image break code for demo purpose2!';
  }
}
