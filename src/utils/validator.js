export const required = (value) => {
  if (value) return undefined;
  return "Field is Required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength ) return `max Length is ${maxLength} symbols`;
  return undefined;
};


export const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength ) return `min Length is ${minLength} symbols`;
  return undefined;
};