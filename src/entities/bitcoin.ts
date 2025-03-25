export interface IBitcoinQuote {
  name: string;
  format: [string, string];
  last: number;
  buy?: number;
  sell?: number;
  variation: number;
  code: string;
}
