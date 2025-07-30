const phonRegex = "^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$";

const validatePhonNumber = (number) => {
    return phonRegex.test(number);
}