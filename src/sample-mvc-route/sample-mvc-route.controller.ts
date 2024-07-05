import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SampleMvcRouteService } from './sample-mvc-route.service';
import { SampleData } from 'src/dto/sampleData.dto';
import { QueryData } from 'src/dto/findByQuerry.dto';

// root route
@Controller('sample-mvc-route')
export class SampleMvcRouteController {
    constructor(private readonly sampleMvcRouteService:SampleMvcRouteService){

    }

    //@Endpoint:GET domain/sample-mvc-route/sample
    //@Desc:normal Get api
    @Get("/sample")
    GetSampleData(){
        return this.sampleMvcRouteService.GetSampleData()
    }
     //@Endpoint:GET domain/sample-mvc-route/sample?id=[id go here no need "[]"]&tier=[tier go here no need "[]" too]
    //@Desc:Get api with Querry params & for mutiple querry params
    @Get("/sample/role")
    GetDataByQuerry(@Query("role")role:string,@Query("tier")tier:string){
        console.log(tier)
        const payload:QueryData = {role,tier}
        return this.sampleMvcRouteService.GetSampleDataByQuerry(payload)
    }
     //@Endpoint:GET domain/sample-mvc-route/sample/[id go here]
    //@Desc:normal Get api with url param
    @Get("/sample/:id")
    GetSampleDataById(@Param("id")id:string){
        return this.sampleMvcRouteService.GetSampleDataById(id)
    }
     //@Endpoint:POST domain/sample-mvc-route/creare
    //@Desc:normal Post api with body
    @Post("/create")
    CreateSampleData(@Body()sample:SampleData /*SampleData is "dto" more deails in SampleData class */){
        return this.sampleMvcRouteService.CreateSampleData(sample)
    }
}
