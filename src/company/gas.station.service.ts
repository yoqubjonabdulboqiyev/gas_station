import { Injectable } from "@nestjs/common";
import { GasStationDto } from "./dto/gas.station.dto";
import { GasStation } from "./models/gas.station.model";




@Injectable()
export class GasStationService {
    async get(): Promise<object[]> {
        const data = await GasStation.findAll()
        return data;
    }
    async getById(id): Promise<object> {
        id = Number(id)
        const data = await GasStation.findOne(id)
        return data;
    }
    async create(createGasStation: GasStationDto): Promise<string> {
        const { mainGasStationName } = createGasStation;
        await GasStation.create({ mainGasStationName: mainGasStationName })
        return "Ok";
    }
    async update(createGasStation: GasStationDto, id: string): Promise<object> {
        const { mainGasStationName } = createGasStation;
        const data = await GasStation.update({ mainGasStationName: mainGasStationName }, {
            where: { id: id },
            returning: true
        })
        return data;
    }
    async delete(id): Promise<string> {
        id = Number(id)
        const data = await GasStation.destroy({where: { id: id }})
        return "deleted successfully";
    }
}