import axios from "axios";

export default async function getFinance() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  try {
    const response = await axios.get(`${baseUrl}/finance`, {
      params: {
        key: import.meta.env.VITE_API_KEY,
        format: "json-cors",
      },
    });

    const { results } = response.data;

    return results;
  } catch (error) {
    console.error("Erro ao buscar dados financeiros:", error);
    throw error;
  }
}
