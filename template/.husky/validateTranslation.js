const fs = require('fs');

const translationObject = JSON.parse(
  fs.readFileSync('./src/translations/locales/en.json', 'utf8')
);
const yellowColor = '\x1b[33m%s\x1b[0m';

const checkIfAnyValueIsEmpty = (object) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'string' && object[key] === '') {
      console.log(
        yellowColor,
        `Warning!!! Translation file contains empty values, the value of "${key}" key in translation file is empty.`
      );
      return;
    }
    if (typeof object[key] === 'object') {
      checkIfAnyValueIsEmpty(object[key]);
    }
  }
};

checkIfAnyValueIsEmpty(translationObject);
