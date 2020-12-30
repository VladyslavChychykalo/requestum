export const Type = {
  SEARCH_INPUT: 'SEARCH_INPUT',
};

export const setSearchInput = (value) => ({
  type: Type.SEARCH_INPUT,
  payload: value,
});
