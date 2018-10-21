const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //turnary ?
  data.school = !isEmpty(data.school) ? data.school : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(Validator.toDate(data.from)) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From Date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
