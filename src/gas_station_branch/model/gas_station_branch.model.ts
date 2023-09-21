import { Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { GasStation } from "src/company/models/gas.station.model";

interface GasStationBranchAttrs {
    name: string;
    adress: string;
    location: string;
    phone: string;
    gasStationId: string;
}

@Table({ tableName: "gasStationBranch" })
export class GasStationBranch extends Model<GasStationBranch, GasStationBranchAttrs> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phone: string;

    @ForeignKey(() => GasStation)
    @Column({
        type: DataType.INTEGER,
    })
    gasStationId: number // Category ID stored in my Database


}
