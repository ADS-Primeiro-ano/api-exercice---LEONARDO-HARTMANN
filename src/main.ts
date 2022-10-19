import { NestFactory } from '@nestjs/core';

import { barbeariaModule } from './barbearia.module';

async function bootstrap() {
  const app = await NestFactory.create(barbeariaModule);
  await app.listen(3000);
}
bootstrap();
