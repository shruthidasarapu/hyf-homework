function getName(){ 
    let name = document.getElementById('text').value;
    return `${name}`;
    }
    
    
    const nameString = ['The Butterfly','The Spider', 'The Crow','The Owl', 'The Hummingbird', 'The Hawk', 'The Grasshopper', 'The Eagle', 'The Praying Mantis', 'The Woodpecker'];
    
    function setRandomName() {
        if(name !== " ")
        { 
            
        const getRandom = () => `${nameString[Math.floor(Math.random() * nameString.length)]}`;
        document.getElementById('generate')
        .addEventListener('click', setRandomName);
        document.getElementById('random')
        .innerText = `${getName()}- ${getRandom()}`;
        } else { 
        document.getElementById('random')
            .innerText = "enter your name";
        }  
    }
    