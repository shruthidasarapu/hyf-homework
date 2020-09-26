function logPromise (resolveAfter) { 
    const promise = new Promise( resolve =>{
        setTimeout(() => {
            resolve()
        },resolveAfter*1000 );
        
    })
    
    .then(() => console.log("logged after 2 seconds"))
    }
    logPromise (2);

    // async-await function
    
        const logPromise = new Promise( resolve =>{
            setTimeout(() => {
                resolve("logged after 8 seconds")
            },8000 );
            
        })
        
    async function getLogPromise(){
        const result = await logPromise;
        console.log(result);
    }
    getLogPromise();
     
// set timeout
const logPromise = new Promise( resolve =>{
    setTimeout(resolve , 3000) 
})   
    
.then(() =>  {console.log("called after 3 seconds") })

// geocurrent position
  
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
} 
, (error) => { console.timeLog(error)})

// fetching and waiting

const logPromise = new Promise( resolve =>{
    setTimeout(resolve, 3000)
    
}) 
.then(() => {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => console.log(data))
})  


async function getPromise(){
    try { 
     const astros =   await logPromise
     const response = await  fetch("http://api.open-notify.org/astros.json")
     const data = await response.json()
     console.log(data)
    }
    catch(error) {
       alert(error) 
    }
}
getPromise();