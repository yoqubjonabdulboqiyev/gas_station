import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GasStation } from "./models/gas.station.model";
import { GasStationController } from "./gas.station.controller";
import { GasStationService } from "./gas.station.service";



@Module({
    imports: [SequelizeModule.forFeature([GasStation])],
    controllers: [GasStationController],
    providers: [GasStationService],
    exports: [SequelizeModule]
})

export class GasStationModule { }