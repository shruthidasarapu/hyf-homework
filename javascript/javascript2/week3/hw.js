setTimeout(function(){ 
    console.log("called after 2.5 seconds"); 
}, 2500);
/--------------------------------------------/
function abstract(delay, stringToLog) 
{ 
 delay *= 1000;
 setTimeout(() => {
     console.log(stringToLog);
 }, delay);
 
} 
abstract(5, "the string loaded after 5 seconds");
abstract(3, "the string loaded after 3 seconds");
/-----------------------------------------------------/
const button = document.getElementById('timer');
function runAfterDelay  () { 
    abstract(5,"called after 5 seconds");
};
button.addEventListener('click',runAfterDelay);

/---------------------------------------------------------/
 const earthLogger = function earthLogger() {
    console.log("Earth");
}
 const saturnLogger = function saturnLogger() {
     console.log("Saturn");
} 
function planetLogFunction(planet){
 planet();

}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger); 
/-------------------------------------------------/
const logLocation = document.getElementById('location');

if('geolocation' in navigator) {
    console.log('geolocation is available') ;
    logLocation.addEventListener('click',navigation);
    function navigation(){ 
    navigator.geolocation.getCurrentPosition(position => {
        
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const lon = position.coords.longitude;
        document.getElementById('longitude').textContent = lon;
        
      });
    }  
  } else {
    console.log('geolocation IS NOT available'); 
  }
  /--------------------------------------------------------/
  function runAfterDelay(delay, callback){
     delay *= 1000;
     
     setTimeout(() => {
        callback();
    }, delay);
  }
runAfterDelay(4, function(){
    console.log('should be logged after 4 seconds');
});
runAfterDelay(6, function(){
    console.log('should be logged after 6 seconds');
});
/---------------------------------------------/
const body = document.querySelector('body');
const p = document.querySelector('p')
 p.addEventListener('dblclick', doubleClick) 
  function doubleClick() {
    console.log("double click!");
};
/---------------------------------------------------/
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke)
{
    if(shouldTellFunnyJoke == true){
        logFunnyJoke(shouldTellFunnyJoke);
    }
    else {
        logBadJoke(shouldTellFunnyJoke);
    }


function logFunnyJoke(){
    console.log("funny joke");
}
function logBadJoke(){
 console.log("bad joke");
}
}
jokeCreator(true);
jokeCreator(false);
/---------------------------------------------/
const array = [fun1(),fun2(),fun3()];
for (let i = 0; i < array.length; i++) {
    array[i];
}
function fun1(){
    console.log("this is function1")
}
function fun2(){
    console.log("this is function2")
}
function fun3(){
    console.log("this is function3")
}
/---------------------------------------------------/
function normal(){
    console.log("This is a general function");
}
const variable = () =>{
    console.log("This is function as a const");
}
normal();
variable();
/----------------------------------------------/
const person = {
    name : myName()
}
function myName(){
    return "shruthi";
}
myName();
console.log(person);