export const Type = {
  SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
  SET_RESULTS: 'SET_RESULTS',
  SET_HISTORY_ITEM: 'SET_HISTORY_ITEM',
};

export const setSearchInput = (value) => ({
  type: Type.SET_SEARCH_INPUT,
  payload: value,
});

export const setResults = (value) => ({
  type: Type.SET_RESULTS,
  payload: value,
});

export const setHistoryItem = (value) => ({
  type: Type.SET_HISTORY_ITEM,
  payload: value,
});
