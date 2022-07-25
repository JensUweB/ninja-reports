import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expenseCategory',
})
export class ExpenseCategoryPipe implements PipeTransform {
  transform(value: string, categories: any[] | null): string {
    if (!categories) {
      return '';
    }
    return categories.find((category) => category.id === value).name;
  }
}
