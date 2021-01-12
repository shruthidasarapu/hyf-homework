import React, {useState,useEffect}  from 'react'

   
export function Profile(){
    const [user, setUser] = useState({})
    const [userName,setUserName] = useState('')

useEffect(() => {
     if(userName === ''){
         return 'no results... '
     } else { 
         (async () => { 
             try {
          const result = await fetch(`https://api.github.com/users/${userName}`);
          
          const content = await result.json();
          console.log(content);
         return setUser((content));
        } catch (error) {
            throw new Error('no result found') 
          }
        })();
     }
    },[userName]);

    console.log(user); 
return (
    <div>
       <input type= "text" value={userName} onChange= {(e) => setUserName(e.target.value)} />
        <h1> {user.name}</h1>
        <h2>{user.login}</h2>
        <img src= {user.avatar_url}/>
       </div>
)
}

