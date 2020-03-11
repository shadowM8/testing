const palindromeCheck = (string) => {
  if (string.split("").reverse().join("") === string) return true;
  return false;
}

module.exports = palindromeCheck