import englishTranslations from './en/en';
import polishTranslations from './pl/pl';

const translationsObject = Object.assign(
  {},
  englishTranslations,
  polishTranslations
);

console.log(translationsObject);

export default translationsObject;
