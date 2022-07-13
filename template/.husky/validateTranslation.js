const fs = require('fs');

const translationDirSrc = './src/translations/locales';
const yellowColor = '\x1b[33m%s\x1b[0m';

const checkIfAnyValueIsEmpty = (object, filename) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'string' && object[key] === '') {
      console.log(
        yellowColor,
        `Warning!!! Translation file "${filename}" contains empty values, the value of "${key}" key in translation file is empty.`
      );
      return;
    }
    if (typeof object[key] === 'object') {
      checkIfAnyValueIsEmpty(object[key], filename);
    }
  }
};

fs.readdir(translationDirSrc, (_, files) => {
  files.forEach((filename) => {
    if (filename.includes('.json')) {
      const translationObject = JSON.parse(
        fs.readFileSync(`${translationDirSrc}/${filename}`, 'utf8')
      );
      checkIfAnyValueIsEmpty(translationObject, filename);
    }
  });
});
