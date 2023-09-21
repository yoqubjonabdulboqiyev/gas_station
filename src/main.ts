import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from "../config"
const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(config.PORT, () => {
      console.log("Server started");
    });

  } catch (err) {
    console.log(err);
  }
};

start();
