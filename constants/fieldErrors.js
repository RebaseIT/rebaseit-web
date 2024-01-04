export const REGEX = {
  TEXT: /.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PHONE: /^\d{10,}$/,
  TEXTAREA: /^.{10,}$/
}

export const MESSAGES = {
  REQUIRED: 'Este campo es requerido',
  EMAIL: 'Por favor, introduce un correo electrónico válido',
  PHONE: 'Por favor, introduce un número de teléfono válido',
  MIN_LENGTH: (min) => `Este campo debe tener al menos ${min} caracteres`,
}
