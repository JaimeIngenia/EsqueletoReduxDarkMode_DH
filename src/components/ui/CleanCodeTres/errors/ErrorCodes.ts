// export const errorCodes = {
//   ["try_again"]: "Por favor pruebe nuevamente",
//   ["card_expired"]: "La tarjeta ha expirado",
//   ["contact_us"]: "Contáctese con nuestro soporte",
//   ["default"]: "Por favor pruebe nuevamente",
// };

// export const getErrorMessageBetterBetter = (code) => {
//   return errorCodes[code] || errorCodes["default"];
// };

// Version tipada

// Definimos los posibles códigos de error como un tipo
type ErrorCode = "try_again" | "card_expired" | "contact_us" | "default";

// Tipamos el objeto errorCodes
export const errorCodes: Record<ErrorCode, string> = {
  try_again: "Por favor pruebe nuevamente",
  card_expired: "La tarjeta ha expirado",
  contact_us: "Contáctese con nuestro soporte",
  default: "Por favor pruebe nuevamente",
};

// Tipamos la función getErrorMessageBetterBetter
export const getErrorMessageBetterBetterTres = (code: ErrorCode): string => {
  return errorCodes[code] || errorCodes["default"];
};
