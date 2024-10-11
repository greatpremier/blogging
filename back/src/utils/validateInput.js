const validateInput = (data, requiredFields) => {
    let errors = [];
  
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors.push(`${field} is required`);
      }
    });
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };
  
  module.exports = validateInput;
  