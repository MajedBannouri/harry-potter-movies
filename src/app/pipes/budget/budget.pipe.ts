import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe){}

  transform(value: string): string {
    if(value==null) return ''
    if(value.includes('-')) {
      const [start, end] : number[] = value.split('-').map(val=> parseFloat(val.trim()))
      const formattedBugdetStartsFrom : string | null= this.currencyPipe.transform(start, 'USD', 'symbol', '1.0-0')
      const formattedBugdetComesTo: string = end.toLocaleString()
      return `${formattedBugdetStartsFrom}-${formattedBugdetComesTo}  million`
    }
    const formattedCurrency: string | null = this.currencyPipe.transform(Number(value), 'USD', 'symbol', '1.0-0')
    return `${formattedCurrency} million`
  }

}
