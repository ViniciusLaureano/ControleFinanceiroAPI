import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Main function to initialize NestJS server and configure Swagger.
 *
 * Swagger serves to document the application's API, making visualization and testing of routes easier.
 *
 * The Bearer Token is required to access most API routes, with the exception of 'GET: /' and 'POST: /auth/login'.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Controle Financeiro')
    .setDescription(
      `Initial API base for the Controle Financeiro project.
For all paths (with the exception of 'GET: /', 'POST: /auth/login' and 'POST: /auth/register'), a Barear Token is required to execute the request.`,
    )
    .setVersion('1.0')
    .addTag('Base')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
