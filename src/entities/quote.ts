import type { IBitcoinQuote } from "./bitcoin";
import type { ICurrencyQuote } from "./currency";
import type { IStockIndex } from "./stock";
import type { ITax } from "./tax";

export interface IQuotesState {
  currencies: ICurrencyQuote[];
  stocks: IStockIndex[];
  bitcoin: IBitcoinQuote[];
  taxes: ITax;
  lastUpdated?: string;
}

export type QuoteCategory = "stocks" | "bitcoin" | "currency" | "taxes";

export type HistoricalQuote = {
  date: string;
  first?: number;
  last?: number;
  max?: number;
  min?: number;
  avg?: number;
  [key: string]: any;
};
