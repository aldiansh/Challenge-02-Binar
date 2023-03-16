function getAngkaTerbesarKedua(personName) {
  if (personName == Number(personName)) {
    return "Error : bukan array";
  } else if (!personName) {
    return "Error : tidak ada parameter";
  }

  personName.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < personName.length; i++) {
    if (personName[i] < personName[0]) {
      return personName[i];
    }
  }

  return personName[0];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
