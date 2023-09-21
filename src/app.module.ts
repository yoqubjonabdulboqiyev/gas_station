import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize"
import { config, configM } from "../config"
import { GasStationModule } from './company/gas.station.module';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
@Module({
  imports: [
    configM,
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: config.DB_HOST || "localhost",
      port: Number(config.DB_PORT),
      username: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      models: [],
      autoLoadModels: true,
      synchronize: true,
      logging: true
    }),
    GasStationModule,
    GasStationBranchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }