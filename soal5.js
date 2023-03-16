function getSplitName(fullName) {
  if (typeof fullName !== "string") {
    return "Error : parameter must be a string ";
  }

  const nameArr = fullName.trim().split(" ");

  if (nameArr.length > 3) {
    return "Error : This function is only for 3 characters name" ;
  }

  const result = {
    firstName: nameArr[0],
    middleName: null,
    lastName: null,
  };

  if (nameArr.length === 2) {
    result.middleName = nameArr[1];
  } else if (nameArr.length === 3) {
    result.middleName = nameArr[1];
    result.lastName = nameArr[2];
  }

  return result;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));