export class UpcaseValueConverter {
  toView(value: any): string {
    let p = value;
    return typeof value === 'string' ? value.toUpperCase() : '';
  }
}
