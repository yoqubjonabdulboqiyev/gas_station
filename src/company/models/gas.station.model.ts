import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GasStationBranch } from "src/gas_station_branch/model/gas_station_branch.model";



interface GasStationCreateAtt {
    mainGasStationName: string;
}

@Table({ tableName: "gasStation" })
export class GasStation extends Model<GasStation, GasStationCreateAtt>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    mainGasStationName: string;
    
    // @BelongsTo(() => GasStationBranch)
    // GasStationBranch: object
}