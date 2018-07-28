import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
    {
        name: 'impurePipe',
        pure: false
    }
)

export class ImpurePipe implements PipeTransform {
    transform(value: any): any {
        setInterval(() => {
            value = value + 100;
        }, 2000);
        return value + value;
    }
}
