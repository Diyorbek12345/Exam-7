export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});
