const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
   const errors = {}
   //If the name field waas empty we will not get an empty string, here we using our isEmpty function to test and if it is empty we set data.name to empty string. This way data.name could be tested after using Validator.isEmpty
   data.name = !isEmpty(data.name) ? data.name : '';
   data.email = !isEmpty(data.email) ? data.email : '';
   data.password = !isEmpty(data.password) ? data.password : '';
   data.password2 = !isEmpty(data.password2) ? data.password2 : '';

   if (!Validator.isLength(data.name, {min: 2, max: 30})) {
      errors.name = 'The name must be beteween 2 and 30 characters';
   }
   if (Validator.isEmpty(data.name)) {
      errors.name = 'Name field is required';
   }
   if (Validator.isEmpty(data.email)) {
      errors.email = 'Email field is required';
   }
   if (!Validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
   }   
   if (Validator.isEmpty(data.password)) {
      errors.password = 'Password field is required';
   }
   if (!Validator.isLength(data.password, {min: 6, max: 30})) {
      errors.password = 'The password must be at least 6 characters';
   }
   if (Validator.isEmpty(data.password2)) {
      errors.password2 = 'Confirm Password field is required';
   }
   if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = 'Passwords must match';
   }

   return {
      errors,
      isValid: isEmpty(errors)
   }
};