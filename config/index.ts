import { ConfigModule } from "@nestjs/config"

export const configM = ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
});
export const config = {
    PORT: Number(process.env.PORT) || 8080,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: Number(process.env.DB_PORT),
    DB_USER: process.env.DB_USER,
}

