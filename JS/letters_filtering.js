
  const str = "Привет! Как дела?";
const vowels = ["а", "е", "и"];
const getvowels = vowelsfilter=>{
  let extractedvowels = "";
  for (let i=0; i<vowelsfilter.length; i++){
    const currentletter = vowelsfilter[i];
    if (vowels.indexOf(currentletter) !== -1) {
      extractedvowels = extractedvowels + currentletter;
    }
  }
  return extractedvowels;
}
console.log(getvowels(str));