import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit= data =>{
      const eventData = {
        name: data.name,
        imageURL: imageURL
      };
      const url=`https://whispering-peak-81646.herokuapp.com/addEvent`;

    //console.log(eventData);
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
  .then(res => console.log('server side response', res))
  };

    const handleImageUpload=event=>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    
    imageData.set('key', '08f76f768bf0478a01466ff6eeab9150');
    imageData.append('image', event.target.files[0]);
     
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
    // console.log(response.data.data.display_url)
    setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Add your awesome Product Here</h1>
     
      <form onSubmit={handleSubmit(onSubmit)}>
    
    <input name="name" defaultValue=" Products Details" ref={register} />
    <br/>
    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
    <br/>
    <input type="submit" />
  </form>
    </div> 
  );
};

export default AddEvents;