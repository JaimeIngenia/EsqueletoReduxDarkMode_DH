import { errorCodes } from "./errors/ErrorCodes";

export const getErrorMessage = (code) => {
  if (code === "try_again") {
    return "Por favor pruebe nuevamente";
  }
  if (code === "card_expired") {
    return "La tarjeta ha expirado";
  }
  if (code === "contact_us") {
    return "Contáctese con nuestro soporte";
  }
  return "Error generico";
};

//Switch

export const getErrorMessageBetter = (code) => {
  switch (code) {
    case "try_again":
      return "Por favor pruebe nuevamente";
    case "card_expired":
      return "La tarjeta ha expirado";
    case "contact_us":
      return "Contáctese con nuestro soporte";
    default:
      return "Por favor pruebe nuevamente";
  }
};

//El mejor de todos con el diccionario

export const getErrorMessageBetterBetter = (code) => {
  return errorCodes[code] || errorCodes["default"];
};
