import { Injectable } from '@nestjs/common';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';
import { GasStationBranch } from './model/gas_station_branch.model';

@Injectable()
export class GasStationBranchService {
  async create(createGasStationBranchDto: CreateGasStationBranchDto) {
    const data = await GasStationBranch.create(createGasStationBranchDto);
    return data;
  }

  async findAll() {
    const data = await GasStationBranch.findAll({ include: { all: true } })
    return data;
  }

  async findOne(id) {
    const data = await GasStationBranch.findOne(id);
    return data;
  }

  update(id: number, updateGasStationBranchDto: UpdateGasStationBranchDto) {
    return `This action updates a #${id} gasStationBranch`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasStationBranch`;
  }
}
