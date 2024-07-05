import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        // get http
        const ctx = host.switchToHttp()
        // get response
        const response = ctx.getResponse()
        //get request
        const request = ctx.getRequest()
        //get status
        const status = exception.getStatus()
        //get message
        const message = exception.message

        // You can custom error massage or error object structure here for more user friendly when response error
        if(status === 404){
            response.status(404).json({message:"Not found",success:false,timestamp:Date.now(),status})
        }
        else{
            response.status(status).json({message:"Server errors",success:false,timestamp:Date.now(),status})
        }
    }
}