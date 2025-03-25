import axios from "axios";

export async function getQuoteHistorical(symbol: string) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  try {
    const response = await axios.get(
      `${baseUrl}/finance/historical?days_ago=180&mode=${symbol}`,
      {
        params: {
          key: import.meta.env.VITE_API_KEY,
          format: "json-cors",
        },
      },
    );

    const { results } = response.data;

    return results;
  } catch (error) {
    console.error("Erro ao buscar dados financeiros:", error);
    throw error;
  }
}
