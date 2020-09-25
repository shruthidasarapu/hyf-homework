const search = document.getElementById('input')
const button = document.getElementById('btn')
const number = document.getElementById('limit')
const giphy = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=mw9hPW8FyUYBdxVPmvTVdi8NZeU3ZiUC&q=${search.value}&limit=${number.value}`)
        .then(response => response.json())
        .then(promise => { promise.data.forEach(element =>{ console.log(element.images.fixed_width.url)
        const img = document.createElement('img')
           img.src = element.images.fixed_width.url
            
           const div = document.getElementById('container')
          
            div.appendChild(img) 
           });
        })
        
    
}
button.addEventListener('click', giphy)