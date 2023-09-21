import { Module } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { GasStationBranchController } from './gas_station_branch.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationBranch } from './model/gas_station_branch.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationBranch])],
  controllers: [GasStationBranchController],
  providers: [GasStationBranchService],
  exports: [SequelizeModule]
})
export class GasStationBranchModule { }
