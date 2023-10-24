// **************** Assignment 1 **************
console.log(" **************** Assignment 1 **************");
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let zNameSplit = zName.split(" ");
        let firstName = zNameSplit[0];
        let lastName = zNameSplit[zNameSplit.length - 1];
        let outName = lastName.charAt(0).toUpperCase()
        return `${firstName} ${outName}.`
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let outName=parseInt(zAge);
        return`Your Age Is ${outName}`
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        let countryFirstLetter=zCountry.charAt(0).toUpperCase()
        let countrySecondLetter=zCountry.charAt(1).toUpperCase()
        return`You Live In ${countryFirstLetter}${countrySecondLetter}`
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY





// **************** Assignment 2 **************
console.log(" **************** Assignment 2 **************");

let itsMe = _ => `Iam A Arrow Function`;
console.log(itsMe()); // Iam A Arrow Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org





// **************** Assignment 3 **************
console.log(" **************** Assignment 3 **************");

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble





// **************** Assignment 4 **************
console.log(" **************** Assignment 4 **************");
function specialMix(...data) {
    let summation = 0;
    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
            continue;
        }
        summation += parseInt(data[i]);
    }
    if (summation === 0) {
        return "All Is Strings"
    }
    return summation
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings