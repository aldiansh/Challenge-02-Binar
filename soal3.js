function checkTypeNumber(input) {
  return "Error : Parameter harus berupa string";
}

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-z0-9_-]{3,16}$/i;
  const isEmail = emailRegex.test(email);
  const isUsername = usernameRegex.test(email);

  if (!email) {
    return "Error: Parameter email tidak diberikan";
  } else if (isEmail) {
    return "VALID";
  } else if (isUsername) {
    return "Error: Email harus memiliki format yang benar";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
