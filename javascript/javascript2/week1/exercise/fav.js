const favoriteDishes = ["chicken", "egg", "fish","mutton","vegetables"];
    
    const body = document.querySelector("body");
    
    const ul = document.createElement("ul");
    ul.innerText = "My favorite dishes:";
    body.appendChild(ul);
    
    for (let i = 0; i < favoriteDishes.length; i++) {
    let li = document.createElement("li");
    li.innerText = favoriteDishes[i];
    ul.appendChild(li);
    }