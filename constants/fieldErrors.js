export const REGEX = {
  TEXT: (min) => new RegExp(`^.{${min},}$`),
  EMAIL: /.+@.+\..+/,
  PHONE: /^\d{10,}$/
}

const isRequired = (value, errorText) => !!value || errorText
const minLength = (value, min, errorText) => (!value || REGEX.TEXT(min).test(value)) || errorText
const isValidEmail = (value, errorText) => (!value || REGEX.EMAIL.test(value)) || errorText
const isValidPhone = (value, errorText) => (!value || REGEX.PHONE.test(value))|| errorText

export { isRequired, isValidEmail, isValidPhone, minLength }
