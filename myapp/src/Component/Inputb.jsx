import React, { useState } from 'react';


const Inputb = () => {

    const [displayData , setDisplayData] = useState()
    const [formData , setFormData] = useState({
        firstName : '',
        lastName : '',
        email : ''
    })


    const handleOnChange =(event)=> {

        const {name,value} =  event.target;
        console.log("something")
        setFormData( (prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log(formData)
        setDisplayData({...formData}) 
        setFormData({
            firstName : '',
            lastName : '',
            email : ''
        })       
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Enter the firstName : 
                <input 
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleOnChange}/>
            </label>

            <label>
                Enter the firstName : 
                <input 
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleOnChange}/>
            </label>

            <label>
                Enter the firstName : 
                <input 
                type="text"
                name='email'
                value={formData.email}
                onChange={handleOnChange}/>
            </label>

            <button type='submit'>submit</button>
            </form>



        {
            displayData && (
               <div> <h1>firstName  {displayData.firstName}</h1>
               <h1>lastName {displayData.lastName}</h1>
               </div> 

            )
        }


        </div>
    )

}

export default Inputb;
