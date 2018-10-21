const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  //turnary ?
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Text must be more than 10 characters and less than 300";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
