// A future age calculator 

const yearOfBirth = 1987;
const yearOfFuture = 2027;
const age = yearOfFuture - yearOfBirth;
 const output = ` you will be ${age} years old in ${yearOfFuture}`;
 console.log(output);


// A dog age calculator

 const dogYearOfBirth = 2017;
 const dogYearFuture = 2027;
 const dogYear = dogYearFuture - dogYearOfBirth;
 var shouldShowResultInDogYears; 
 if(shouldShowResultInDogYears == dogYear * 7)
 {
     shouldShowResultInDogYears = `your dog will be ${shouldShowResultInDogYears} dog yeras old in ${dogYearFuture}`;   
 }else {
    shouldShowResultInDogYears = `your dog will be ${dogYear} human yeras old in ${dogYearFuture}`;
    }

 
    //A house price estimator

 let wideArray = [8,5];
 let highArray = [10,8];
 let deepArray = [10,11];
 let volumeInMeters = [wideArray[0]*highArray[0]*deepArray[0] , wideArray[1]*highArray[1]*deepArray[1]];
 let gardenSizeInM2 = [100 , 70];
 let housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300 , volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];
 let houseCost = [2500000, 1000000];
 if(houseCost[0] <= housePrice[0])
 {
    console.log("It is a good price");
 }else {
    console.log("It is too much price");
 }
 if(houseCost[1] <= housePrice[1])
 {
    console.log("It is a good price");
 }else {

    console.log("It is too much price");
 }
 
 // Startup name generator

 var firstWords = ["Donkey", "Zet" , "Lab", "Canopy", "Plan", "Cph", "App", "Anyfi", "Bat", "Appti"];
 var secondWords = ["Republic", "land", "ster","Lab","day", "containers", "flower","networks", "metrics","mate"];
 var startupName = firstWords[0] + secondWords[0];
 console.log("The startup: " + startupName + " contains " + startupName.length +" characters.");
 