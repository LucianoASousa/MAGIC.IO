import api from "./api.js";
import { LandTypes } from "../utils/types.js";

export async function fetchCards(AllowedTypes) {
    const Lands = Object.values(LandTypes);

    const response = await api.get("/cards/random", {
      params: {
        q: 'legal:historic',
      }
    });

    const card = response.data;
    const types = card.type_line.split(' — ');

    if (AllowedTypes.includes(types[0]) && !Lands.includes(types[0])) {
      return card;
    }

    await fetchCards(AllowedTypes);
  }