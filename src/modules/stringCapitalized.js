const stringCapitalized = (string) => {
  const remain = [...string].slice(1, string.length).join('');
  const newString = [...string][0].toUpperCase() + remain.toLowerCase();
  return newString;
};

module.exports = stringCapitalized;