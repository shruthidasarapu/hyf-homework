// Item array removal
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
names.splice(1,1);  // Remove the item using index value directly

for(let i = 0; i < names.length; i++)  // UNKNOWN INDEX USE FOR LOOP
{
  if(names[i] == nameToRemove){
    names.splice(i, 1);
    break;
  }
}
console.log(names);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
//........................................................//
// Traveltime

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function totalTime(travelInformation){
   let time = travelInformation.destinationDistance/travelInformation.speed;
  let  hours = Math.floor(time);
  let minutes = Math.floor((time - hours)* 60);
  return hours + ' hours '+ ' and ' + minutes + ' minutes ';
}
const travelTime = totalTime(travelInformation);
console.log(travelTime);
//::::::::::::::::::::::::::::::://

// TV series

const seriesDurations = [
  {
    title: 'Homeland',
    days: 6,
    hours: 17,
    minutes: 0,  
  },
  {
    title: 'The Walking Dead',
    days: 10,
    hours: 23,
    minutes: 54,  
  },
  {
    title: 'Breaking Bad',
    days: 12,
    hours: 22,
    minutes: 24,  
  },
]
function logOutSeriesText() {
  let totalPercentage = 0;
  let averageLifeSpan = 80 *365* 1440 ;
  for(let i = 0; i< seriesDurations.length ; i++)
    {
      let timeTaken = seriesDurations[i].days *1440 +seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
      let percentage = (timeTaken / averageLifeSpan) * 100 ;
      console.log(`${seriesDurations[i].title} took ${percentage.toFixed(2)}% of my life`);
      totalPercentage = totalPercentage + (timeTaken/averageLifeSpan)*100;
    }
    console.log(` In total that is ${totalPercentage.toFixed(2)}% of my life`);
     }
      logOutSeriesText(); 
//::::::::::::::::::::::::::::::::::::::::::://
// Note taking app
//save a note   

const notes = [];

function saveNote(content, id) {
    
    let obj = {
      content : content ,
      id : id
    };
   notes.push(obj);
  }
  saveNote('Pick up groceries', 1);
  saveNote('Do laundry', 2);
  console.log(notes);

  // Getnote 

  function getNote(id) {
    
    for( let i = 0; i < notes.length ; i++)
      {
        if(i == id)
        {
         return notes[i].content;
        }
      }
   return 'error' ;
  }
  
  const firstNote = getNote(1); 
  console.log(firstNote); 

  // Logout note
  function logOutNotesFormatted() 
{
  for( let i = 0; i< notes.length; i++){
   console.log(`The note with id:${notes[i].id}, has the following note text: ${notes[i].content}`); 
  }
 }
logOutNotesFormatted();
//.........................................................//

// Optional 

  let activities = [];
  
 function addActivity(date , activity, duration)
{
  let obj = {
    date : date,
    activity: activity,
    duration: duration
  };
  if(typeof(date)== 'string' && typeof(activity)== 'string' && typeof(duration)== 'number')
    {
  activities.push(obj);
    }
}
    addActivity('20/7-18', 'Youtube', 10);
    addActivity('21/7-18', 'Google', 20);
    addActivity('22/7-18', 'Facebook', 30);
    addActivity('23/7-18', 'Whatsapp', 40);
    addActivity('24/7-18', 'Instagram', 50);

    console.log(activities);

  function showStatus(activities)
  {
  let totalTime = 0;
  let usageLimit = 60;
   for(let i = 0; i< activities.length; i++)
     {
       let time = activities[i].duration;
       totalTime = totalTime + time;
     }
     if(totalTime <= usageLimit){
       console.log(`you have added ${activities.length} activities. They amount to ${totalTime} min. of usage`);
     } else {
        console.log("You have reached your limit, no more smartphoning for you!");
     }
 }
   showStatus(activities);