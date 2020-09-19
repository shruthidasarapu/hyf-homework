const body = document.querySelector('body');
  const h2 = document.createElement('h2')
  fetch('https://cat-fact.herokuapp.com/facts') // fetches api
  .then(response => response.json())            // get into promise
  .then(facts => { 
    facts.all.forEach(element => { console.log(element.text)   // from array of objects display only text object
      const h2 = document.createElement('h2')
  
    h2.innerText = element.text
    body.appendChild(h2)
    })
  });