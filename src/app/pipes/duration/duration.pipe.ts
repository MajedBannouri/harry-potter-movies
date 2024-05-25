import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    if (value == null) return '';
    const hours: number = Math.floor(Number(value) / 60);
    const minutes: number = Number(value) % 60;
    return `${hours}h ${minutes}min`;
  }
}
