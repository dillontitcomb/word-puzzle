function noVowels(string) {
  for (var x = 0; x < string.length; x++) {
    if (string[x] == "a" || string[x] == "e" || string[x] == "i" || string[x] == "o" || string[x] == "u"){
      newString += "-";
    }
    else{
      newString += string[x];
    }
  }
  alert(string);
}
