import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription(
      `Initial API base for the 'ControleFinanceiro' project.
For all paths (with the exception of 'GET: /' and 'POST: /auth/login'), a Barear Token is required to execute the request.`,
    )
    .setVersion('1.0')
    .addTag('Base')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
