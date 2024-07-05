import { IsNotEmpty } from "class-validator";
/*
What is dto?
dto is short form of Data Transfer Object

easy say it is interface,type of object that u 
pass from topper level to lower level as variable in mvc route

What difference dto and interface,type

dto can fully validate your data use "@" to notation it property

like in this file @IsNotEmpty meaning is must have 

you can use to validate email regex string length etc Search in google

*/
export class SampleData{
    @IsNotEmpty()
    title:string
    @IsNotEmpty()
    context:string
    @IsNotEmpty()
    author:string
}