const button = document.getElementById("start");
const h2 = document.querySelector('h2');
const p = document.querySelector('p')
const countS = document.getElementById('textS');
const countL = document.getElementById('textL');

    let count1 = 0;
    let count2 = 0;

 let game = (e) =>{ 
    let key = e.key;
    
    if(key === 's')
    {
          countS.innerHTML = count1++;
    } else if(key === 'l')
    {
          countL.innerHTML = count2++;
    }
};
const timer = (amountOfTime) => { 
document.addEventListener('keypress', game)
setTimeout(() => {
    document.removeEventListener('keypress', game)

if(count1 > count2){
    countS.innerHTML = "winner";
}else if(count2 > count1)
{
    countL.innerHTML = " winner";
}else if(count1 = count2){
    countS.innerHTML = "tie game";
    countL.innerHTML = " tie game";
}
}, amountOfTime* 1000);
}

button.addEventListener('click', (e) => { 
let amountOfTime = document.getElementById('time').value;
timer(amountOfTime);
});