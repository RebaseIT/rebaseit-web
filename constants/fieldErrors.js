export const REGEX = {
  TEXT: (min) => new RegExp(`^.{${min},}$`),
  EMAIL: /.+@.+\..+/,
  PHONE: /^\d{10,}$/
}

const isRequired = (value, errorText) => !!value || errorText
const minLength = (value, min, errorText) => REGEX.TEXT(min).test(value) || errorText
const isValidEmail = (value, errorText) => REGEX.EMAIL.test(value) || errorText
const isValidPhone = (value, errorText) => REGEX.PHONE.test(value) || errorText

export { isRequired, isValidEmail, isValidPhone, minLength }
