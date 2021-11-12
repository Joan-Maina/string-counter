const generateCharacterCount = (trial) => {
  let splitted = trial.split("");
  let finalobj = {};

  for (var i = 0; i < splitted.length; i++) {
    let letter = /^[A-Za-z]+$/;

    if (splitted[i].match(letter)) {
      if (!finalobj.hasOwnProperty(splitted[i])) {
        let count = splitted.reduce(
          (acc, curr) => (curr === splitted[i] ? acc + 1 : acc),
          0
        );
        finalobj[splitted[i]] = count;
      }
    }
  }
  return finalobj;
};
console.log(generateCharacterCount("joan maian44"));
