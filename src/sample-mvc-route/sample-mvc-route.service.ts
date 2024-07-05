import { HttpException, Injectable } from '@nestjs/common';
import { QueryData } from 'src/dto/findByQuerry.dto';
import { SampleData } from 'src/dto/sampleData.dto';
import { HttpExceptionFilter } from 'src/middlewares/exception-filter';

@Injectable()
export class SampleMvcRouteService {
    GetSampleData(){
        return "This is sample data"
    }
    GetSampleDataByQuerry(data:QueryData){
        const {role,tier} = data
        return `This is data of ${role} tier ${tier}`
    }
    GetSampleDataById(id:string){
        if(Number(id) > 10){
            // this is how to throw error basiclly
            throw new HttpException('Not found',404)
        }
        console.log(id)
        return `This is sample data id ${id}`
    }
    CreateSampleData(data:SampleData){
        return data
    }
}
