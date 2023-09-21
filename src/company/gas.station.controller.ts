import { Get, Controller, Body, Post, Param, Put, Delete } from "@nestjs/common"
import { GasStationService } from "./gas.station.service"
import { GasStationDto } from "./dto/gas.station.dto"


@Controller("/api")
export class GasStationController {
    constructor(private readonly companyService: GasStationService) { }
    @Get("/gasStation")
    getGasStation(): Promise<object[]> {
        return this.companyService.get()
    }
    @Get("/gasStation/:id")
    getGasStationById(@Param("id") id: string): Promise<object> {
        return this.companyService.getById(id)
    }
    @Post("/gasStation")
    createGasStation(@Body() data: GasStationDto): Promise<string> {
        return this.companyService.create(data)
    }
    @Put("/gasStation/:id")
    updateGasStation(@Body() data: GasStationDto, @Param("id") id: string): Promise<object> {
        return this.companyService.update(data, id)
    }
    @Delete("/gasStation/:id")
    deleteGasStation(@Param("id") id: string): Promise<string> {
        return this.companyService.delete(id)
    }
    
}