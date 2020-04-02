const validEmail = /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$/;
const validNumber = /^[0-9]*$/;

module.exports = {
  register: async (data, model) => {
    const {first_name, last_name, username, email, phone, password} = data;
    let errors = [];
    // check empty data
    if (!first_name) errors.push(`first name can't be empty`);
    if (!username) errors.push(`username can't be empty`);
    if (!email) errors.push(`email can't be empty`);
    if (!phone) errors.push(`phone can't be empty`);
    if (!password) errors.push(`password can't be empty`);
    // check length
    if (20 < first_name.length < 2) errors.push(`first name should be 2 -20 in length`);
    if (20 < last_name.length < 2) errors.push(`last name should be 2 -20 in length`);
    if (20 < last_name.length < 5) errors.push(`password should be 5 -20 in length`);
    if (20 < password.length < 8) errors.push(`password should be 8 -20 in length`);
    if (15 < phone.length < 10) errors.push(`phone should be 10 -15 in length`);
    // validation
    if (!validEmail.test(email)) errors.push(`${email} is not valid email`);
    if (!validNumber.test(phone)) errors.push(`${phone} is not valid phone`);
    // check duplicate
    if (errors.length === 0) {
      const checkEmail = await model.count({email});
      if (checkEmail > 0) errors.push(`email already exist`);
    }
    if (errors.length === 0) {
      const checkUsername = await model.count({username});
      if (checkUsername > 0) errors.push(`username already exist`);
    }
    if (errors.length === 0) {
      const checkPhone = await model.count({phone});
      if (checkPhone > 0) errors.push(`phone already exist`);
    }
    return {errors, valid: errors.length === 0}
  },
  login: async (data, model) => {
    const {email, password} = data;
    let errors = [];
    // check empty data
    if (!email) errors.push(`email can't be empty`);
    if (!password) errors.push(`password can't be empty`);
    // check length
    if (20 < password.length < 8) errors.push(`password should be 8 -20 in length`);
    // validation
    if (!validEmail.test(email)) errors.push(`${email} is not valid email`);
    return {errors, valid: errors.length === 0}
  }
};