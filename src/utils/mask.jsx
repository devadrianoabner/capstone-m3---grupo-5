export const normalizePrice = (value) => {
  if (!value) return "";

  return value.replace(/[\D]/g, "").replace(/(.*)(\d{2})$/, "R$ $1,$2");
};

/*
(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")


(/^\d*\.?([\d]){0,2}$/g, "$1")

  const centavos = value.toString.splice(0, centavos.length - 3);


.replace(/(\d*)(\d{2})$/, "R$ $1,$2")
.replace(/(.*)(\d{2})$/, "R$ $1,$2")
*/
