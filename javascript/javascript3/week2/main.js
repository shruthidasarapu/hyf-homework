     // All at once
     function translateAllAtOnce(){
        
        const promise1 = moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300}) 
    
        const promise2 =  moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300})
        
        const promise3 =   moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20})
        .then(() => {
            console.log('Element has been moved');
        }) 
        return Promise.all[(promise1,promise2,promise3)]
        }
     translateAllAtOnce();
     
      // one by one 
     function translateOneByOne(){
        const promise1 = new Promise( resolve => {
       setTimeout(() => resolve(moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300})), 1000)
        })
        .then(() => {
            console.log(' Red element has been moved');
        }) 
        const promise2 = new Promise( resolve => {
            setTimeout(() => resolve(moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300})), 3000)
             })
             .then(() => {
                 console.log(' Blue element has been moved');
             }) 
             const promise3 = new Promise( resolve => {
                setTimeout(() => resolve(moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20})), 5000)
                 })
                 .then(() => {
                     console.log(' Green element has been moved');
                 }) 
               return Promise.all[(promise1,promise2,promise3)]   
     }
     translateOneByOne();