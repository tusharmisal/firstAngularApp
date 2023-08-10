import { Pipe, PipeTransform } from "@angular/core";
//Meta data to tell angular that this class is of type pipe
@Pipe({
    name: 'ShortenPipe'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any) {
        return value.substr(0,2);
    }

}