const API_URL = "https://api.chucknorris.io/jokes/";
const CAT = "categories";
const RAND = "random";
export const API_URL_CAT = API_URL + CAT;
export const API_URL_RAND = API_URL + RAND;
export const API_URL_RAND_BY_CAT = `${API_URL_RAND}?${CAT}=`;
