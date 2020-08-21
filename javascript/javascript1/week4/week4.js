let name;
const todo = [];
function getReply(command)
{
  const arrayOfStrings = command.split(' ');
  const num1 =  Number(arrayOfStrings[2]);
  const num2 =  Number(arrayOfStrings[4]); 
  switch(command){
    case 'hello my name is benjamin':
      name = command.substring(17);
      return`nice to meet you ${name}`;
      break;
 
    case 'what is my name':
      if(name == undefined){
        return 'enter your name';
      }else {
      return`your name is ${name}`;
      }
     break;
    case 'add fishing to my todo':
      let list1 = command.substring(4,11);
      todo.push(list1);
      return 'fishing added to your todo';
      break;
    case 'add singing in shower to my todo':
      let list2 = command.substring(4,21);
      todo.push(list2);
      return 'singing in shower added to your todo';
      break;
    case 'remove fishing from my todo':
      todo.shift();
      return 'removed fishing from your todo';
      break;
    case 'what is on my todo':
      return`you have ${todo.length} todos-${todo[0]} and ${todo[1]}`;
      break;
    case 'what day is it today?':
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      today = new Date();
     const date = today.getDate();
     const month = today.getMonth(); //As January is 0.
     const year = today.getFullYear();
        return`${date}. of ${months[month]} ${year}`;
        break;
    case'what is 3 + 3':
          if(arrayOfStrings[3] === '+'){
            return num1 + num2;
            break;
        }
    case 'what is 4 * 12' :
         if(arrayOfStrings[3] === '*'){
            return num1 * num2;
            break;
        }
    
    
    case `set a timer for 4 minutes`: 
           let time = arrayOfStrings[4];
           let timeInmilliSeconds = time * 60 * 1000; 
            setTimeout(() => {
                console.log('timer done')
            }, timeInmilliSeconds); 
            return  `timer set for ${time} minutes`;
            break;
    case 'what is math(a,b)': 
            return math('subtraction');
 }
}

    //............. arithematic operations for random numbers............//
  function math(operator){
     let a = Math.floor((Math.random() * 10) + 1);
     let b = Math.floor((Math.random() * 10) + 1);
     console.log(a);
     console.log(b);
    if( operator == 'addition')
      {
       return a + b;
      }else if(operator == 'subtraction'){
        return a - b;
      }else if(operator == 'multiplication')
        {
          return a * b;
        } else if('division')
          {
            return a / b;
          }
    }

console.log(getReply('what is math(a,b)')); 
  

console.log(getReply('hello my name is'));
console.log(getReply('what is my name'));
console.log(getReply('add fishing to my todo'));
console.log(getReply('add singing in shower to my todo'));
console.log(getReply('remove fishing from my todo'));
console.log(getReply('what day is it today?'));
console.log(todo);
console.log(getReply('what is 3 + 3'));
console.log(getReply('what is 4 * 12'));
console.log(getReply('set a timer for 4 minutes'));     
