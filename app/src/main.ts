import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.NODE_ENV === 'production' ? 3000 : 3001;

  const logger = new Logger();
  await app.listen(port, () => {
    logger.log(`\n\n
      ================================================
          Server started at port ${port}
      ================================================
      \n\n`);
  });
}
bootstrap();
