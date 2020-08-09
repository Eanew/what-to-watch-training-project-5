import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getPromo = (state) => state[NAME_SPACE].promo;
export const getFilms = (state) => state[NAME_SPACE].films;
export const getFavorites = (state) => state[NAME_SPACE].favorites;
export const getReviews = (state) => state[NAME_SPACE].reviews;

export default {
  getPromo,
  getFilms,
  getFavorites,
  getReviews,
};
