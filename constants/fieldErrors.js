export const REGEX = {
  TEXT: (min) => new RegExp(`^.{${min},}$`),
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PHONE: /^\d{10,}$/
}

export const MESSAGES = {
  REQUIRED: 'Este campo es requerido',
  EMAIL: 'Por favor, introduce un correo electrónico válido',
  PHONE: 'Por favor, introduce un número de teléfono válido',
  MIN_LENGTH: (min) => `Este campo debe tener al menos ${min} caracteres`,
}

const isRequired = (value) => !value && MESSAGES.REQUIRED
const minLength = (value, min) => !REGEX.TEXT(min).test(value) && MESSAGES.MIN_LENGTH(min)

const biggerThan = (number) => (value) => minLength(value, number)

const isValidEmail = (value) => !REGEX.EMAIL.test(value) && MESSAGES.EMAIL

const isValidPhone = (value) => !value || !REGEX.PHONE.test(value) && MESSAGES.PHONE

export { isRequired, biggerThan, isValidEmail, isValidPhone }
