export interface ICurrencyQuote {
  source: string;
  code: string;
  name: string;
  buy: number;
  sell?: number;
  variation: number;
}
