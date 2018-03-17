const removeSquareBrackets = string => string.replace(/\[/, '').replace(/\]/, '');
const arrayFeature = /\[[\d]\]/g;
const removeArrayFeature = s => s.replace(arrayFeature, '');
module.exports = (object, path) => (path.split('.') || [path]).reduce((acc, curr, currIdx, array) => {
  let arrayIndexs = curr.match(arrayFeature);
  acc.push(curr.replace(arrayFeature, ''));
  return arrayIndexs ? acc.concat(arrayIndexs.map(removeSquareBrackets)) : acc;
}, []).reduce((acc, curr, currIndex, array) => {
  return currIndex === 0 ? object[curr] : acc[curr];
}, {});