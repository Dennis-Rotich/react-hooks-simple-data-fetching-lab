// create your App component here
import React,{ useEffect,useState } from "react";

function App(){
    const [loading,setLoading] = useState(true);
    const [image,setImage] = useState("");
    
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setImage(data.message);
            setLoading(false);        
        })
        .catch(err => console.error(err))
    },[])

    return(
        <div>
            {loading ? <p>Loading...</p>:<img src={image} alt='A Random Dog'/>}
        </div>
    )    
}

export default App
