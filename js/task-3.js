let languages = ["Pyton", "C++", "C#", "PHP"];
if (!languages.includes("Java Script")) {
  console.log("Значення Java Script в списку немає, додаємо в масив");
  languages.push("Java Script");
}
console.log(languages);
