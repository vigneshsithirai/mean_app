import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
    {
        name: 'toString',
        pure: true
    }
)

export class ToStringPipe implements PipeTransform {
    transform(value: any): any {
        return value + value;
    }
}
