export const Type = {
  SET_RESULTS: "SET_RESULTS",
  SET_HISTORY_ITEM: "SET_HISTORY_ITEM",
  SET_IS_SEARCHING: "SET_IS_SEARCHING",
};

export const setResults = (value) => ({
  type: Type.SET_RESULTS,
  payload: value,
});

export const setHistoryItem = (value) => ({
  type: Type.SET_HISTORY_ITEM,
  payload: value,
});

export const setIsSearching = (value) => ({
  type: Type.SET_IS_SEARCHING,
  payload: value,
});
