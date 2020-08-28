// find shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortest(danishWords) {
	return danishWords.reduce(function(prevWord,currWord) {
		if (currWord.length < prevWord.length) {
			return currWord;
		}
		else 
			return prevWord;
	})
}

console.log(findShortest(danishWords));

// find danish letters in a string

const danishString = 'Jeg har en blå bil';
const danishLetters = /[åæø]/gi;
function danish(danishString){
    
let result = danishString.match(danishLetters);
let numberOfResult = danishString.match(danishLetters).length;
let total = numberOfResult ;   
  return `${result} : ${numberOfResult} total : ${total}`;        
          
    
}

console.log(danish(danishString)); 

const danishString2 = 'Blå grød med røde bær';
const danishLetter1 = /[å]/gi;
const danishLetter2 = /[æ]/gi;
const danishLetter3 = /[ø]/gi;
function danish(danishString2){
    
let result1 = danishString2.match(danishLetter1);
let result2 = danishString2.match(danishLetter2);
let result3 = danishString2.match(danishLetter3);
let numberOfResult1 = danishString2.match(danishLetter1).length;
let numberOfResult2 = danishString2.match(danishLetter2).length;
let numberOfResult3 = danishString2.match(danishLetter3).length;
let total =  numberOfResult1 + numberOfResult2 +numberOfResult3;   
  return `${result1} : ${numberOfResult1} ${result2} : ${numberOfResult2} ${result3} : ${numberOfResult3} total : ${total}`;        
          
    
}

console.log(danish(danishString2)); 
 