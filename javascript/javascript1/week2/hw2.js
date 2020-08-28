// Flight booking fullname function

function getFullname(firstname, surname){
  return`${firstname} ${surname}`;
}
console.log(getFullname('Benjamin','Hughes'));
let fullname1 = getFullname('John' , 'Doe');
let fullname2 = getFullname('Lina' , 'Doe');
console.log(fullname1);
console.log(fullname2);
//Formal fullname

function getFullname(firstname, surname, useFormalName){
   
return     useFormalName ? `lord ${firstname}  ${surname}` : `${firstname}  ${surname}`;
         
}
 console.log(getFullname('Lina', 'Doe',false));
 
 console.log(getFullname('John', 'Doe',true));

// Single function for both flight booking and formal name
function getFullName(firstName, surName, useFormalName){
if(useFormalName == true)
{
  return  `lord ${firstName}  ${surName}` ;
} else {
  return  `${firstName}  ${surName}`;
}
}
console.log(getFullName('John' ,'Doe' ,true);
//Eventday
const date = new Date();
const day = date.getDay();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventWeekday(daysToEvent){
  const eventDay = (daysToEvent + day) % 7;
  return eventDay;
}
 const dayOfEvent = getEventWeekday(2);
 console.log(weekday[dayOfEvent]);
  
 //Weather wear
  
  function weatherForeCast(temperature){
    if(temperature >= 15){
      return 'Shorts' + ' ' + ' T-shirts';
    }else if(temperature < 15 ){
      return  'full covered clothes';
    }else if(temperature <= 0){
      return  'winter clothes '
    }else {
      return 'rainy clothes';
    }
  }
  let clothesToWear = weatherForeCast();
  console.log(clothesToWear);

  // student names
  const class07Students = [];
  function addStudentToClass(studentName) {
    // You write code here
  if(class07Students.length < 6)
    {
      if(class07Students.includes(studentName))
        {
          return "already exist";
          } else if(studentName === ' ')
          {
            return "add name";
          }
      class07Students.push(studentName);
    }  
  else if(class07Students.length >= 6 && studentName !== 'Queen' )
    {
      return "class is full" ;
    }
    else if(studentName === 'Queen'){
      return class07Students.push(studentName);
    }
  }
addStudentToClass('a');
addStudentToClass('b');
addStudentToClass('c');
addStudentToClass('d');
addStudentToClass('e');
addStudentToClass('f');
addStudentToClass('g');
addStudentToClass('Queen');

console.log(class07Students);
function getNumberOfStudents() {
    // You write code here
  let students = class07Students.length;
  return students;
}
console.log(getNumberOfStudents());
