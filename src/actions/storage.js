export const SAVE_STORAGE = "SAVE_STORAGE";

export const saveStorage = data => {
  return {
    type: SAVE_STORAGE,
    data
  };
};
