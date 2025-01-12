import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const APP_PORT = 3000;

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    await app.listen(APP_PORT);
}
bootstrap().catch(console.error);
