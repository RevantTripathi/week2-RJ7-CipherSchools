import React, {useState,useEffect} from 'react'
import Axios from "axios";
import { getAllPhtos } from '../apis/apis';

const Photos = () =>{
     const [photosList, setPhotosList] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/photos", {
        //     method: "GET",
        //     headers:{},
        // })
        // .then((response) => response.json())
        // .then((json) => 
        //     setPhotosList(json))
        // .finally(() => setIsLoading(false));

        // Axios.get("https://jsonplaceholder.typicode.com/photos")
        getAllPhtos()
        .then((response) => {
            let foundPhotos = response.data;
            setPhotosList(foundPhotos);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));

},[])

     if (isLoading){
        return <h4>Loading...</h4>
     }

     return(
        <div>
            {photosList.map((photo, index) =>{
                <div key={index}>
                    <img src={photo.url} alt={photo.title}/>
                    </div>
            })}
        </div>
     )

}

export default Photos;