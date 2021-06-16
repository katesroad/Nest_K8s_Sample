import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConf = config();
  const {
    app: { port },
  } = appConf;

  const logger = new Logger();
  const env = process.env.NODE_ENV || 'development';
  await app.listen(port, () => {
    logger.log(`\n\n
      ================================================
      Server started at port ${port}. Env: ${env}
      ================================================
      \n\n`);
  });
}
bootstrap();
