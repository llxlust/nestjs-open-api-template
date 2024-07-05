import { IsNotEmpty } from "class-validator";

export class QueryData{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
    tier:string
}