import axios from 'axios';
import crypto from 'crypto';
import { resolve } from 'path';
// Validate lowercase letters
const lowerCaseCheck = password => {
  let lowerCaseLetters = /[a-z]/g;
  if (!lowerCaseLetters.test(password)) {
    return false;
  }
  return true;
};

// Validate uppercase letters
const upperCaseCheck = password => {
  let upperCaseLetters = /[A-Z]/g;
  if (!upperCaseLetters.test(password)) {
    return false;
  }
  return true;
};

// Validate numbers
const numbersCheck = password => {
  let numbers = /[0-9]/g;
  if (!numbers.test(password)) {
    return false;
  }
  return true;
};

// Validate special characters
const specialCheck = password => {
  let specialChar = /[^a-zA-Z0-9\s]+/g;
  if (!specialChar.test(password)) {
    return false;
  }
  return true;
};

// Validate length
const pwLengthCheck = password => {
  if (password.length < 8) {
    return false;
  }
  return true;
};

const passwordAPIChecker = async password => {
  let hashed = crypto
    .createHash('sha1')
    .update(password)
    .digest('hex')
    .toUpperCase();

  let range = hashed.slice(0, 5);
  let suffix = hashed.slice(5);

  let res = await axios(`https://api.pwnedpasswords.com/range/${range}`);
  let body = await res.data;

  let regex = new RegExp(`^${suffix}:`, 'm');
  return regex.test(body); // true (pwned), false (not pwned)
};

const userValidation = async (password = ' ', userName) => {
  let errorCollection = [];

  if (userCheck(userName) === false) {
    errorCollection = errorCollection.concat({
      message: 'Username needs to contain 6 alpha-numeric charcters',
    });
    // console.log('Username needs to contain 6 charcters');
  }

  // password check
  if (pwLengthCheck(password) === true) {
    if (lowerCaseCheck(password) === false) {
      errorCollection = errorCollection.concat({
        message: 'Needs to contain atleast one lowercase letter',
      });
      // console.log('Needs to contain atleast one lowercase letter');
    }
    if (upperCaseCheck(password) === false) {
      errorCollection = errorCollection.concat({
        message: 'Needs to contain atleast one uppercase letter',
      });
      // console.log('Needs to contain atleast one uppercase letter');
    }
    if (numbersCheck(password) === false) {
      errorCollection = errorCollection.concat({
        message: 'Password needs atleast one number',
      });
      // console.log('Password needs atleast one number');
    }
    if (specialCheck(password) === false) {
      errorCollection = errorCollection.concat({
        message: 'Password needs atleast one special charcter (!@#$)',
      });
      // console.log('Password needs atleast one special charcter (!@#$)');
    }
    const isPwned = await passwordAPIChecker(password).then(res => res);
    if (isPwned === true) {
      errorCollection = errorCollection.concat({
        message: 'Password has been breached, try another password',
      });
      // console.log('Password has been pwned try another password');
    }

    // console.log(errorCollection);
  } else {
    errorCollection = errorCollection.concat({
      message: 'Password is too short',
    });
    // console.log('Password is too short');
    // console.log(errorCollection);
  }

  return errorCollection;
};

const alphanumRegex = /^[0-9a-zA-Z]{6,}$/i;

const userCheck = userName => {
  return alphanumRegex.test(userName);
};

export { userValidation };
