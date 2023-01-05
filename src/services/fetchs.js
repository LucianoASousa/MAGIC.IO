import api from "./api.js";
import { LegalityTypes } from "../utils/types.js";

export async function fetchCards() {

    const notAllowedTypes = [LegalityTypes.SORCERY, 
      LegalityTypes.INSTANT, LegalityTypes.LEGENDARYSORCERY, 
      LegalityTypes.SNOWSORCERY, LegalityTypes.LAND, 
      LegalityTypes.SNOWLAND, LegalityTypes.LEGENDARYLAND, 
      LegalityTypes.BASICSNOWLAND];

    const response = await api.get("/cards/random", {
      params: {
        q: 'legal:historic',
      }
    });

    const card = response.data;
    const types = card.type_line.split(' — ');

    if (!notAllowedTypes.includes(types[0])) {
      return card;
    }

    await fetchCards();
  }