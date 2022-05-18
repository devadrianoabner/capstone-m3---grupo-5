export const normalizePrice = (value) => {
  if (!value) return "";

  return value.replace(/[\D]/g, "");
};
