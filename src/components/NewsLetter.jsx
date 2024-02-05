import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
function NewsLetter() {
    const[formData,setFormData] = useState(
        {
            email:""
        }
    );

    const handleOnChange=(e)=>{
        const{name,value} = e.target;
        setFormData((prevstate)=>({
            ...prevstate,[name]: value,
        } ))
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            const response = axios.post('https://madrascampers.onrender.com/newsletter/add',formData)
            if(response.data === true ){
                alert("Subscribed sucessfully")
            }
        } catch (error) {
            
        }
        console.log(formData)
        setFormData({
            email:""
        })
    }
  return (
    <div className='newsletter'>
    <div className='home-newsletter'>
        <Form className='newsform' onSubmit={handleSubmit}>
          <label className='news-email' >Subscribe to our mailing list</label>
          <input 
          className='newsinput'
          type="email" 
           name="email" 
           value={formData.email}
            onChange={handleOnChange} 
            placeholder="email address" required/>
         <input className='newsinput' type="submit"  />      
        </Form>
    </div>
    </div>
  )
}

export default NewsLetter