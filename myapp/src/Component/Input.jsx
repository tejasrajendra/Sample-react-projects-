import React, { useState } from 'react';


const Input = () =>{


    const [formData , setFormData] = useState({ 
        firstName : '',
        lastName : '',
        email : ''
    })

    const [displayData , setDisplayData] =  useState(null)

    const handleInputChange = (e) => {
        const { name , value } = e.target;
        setFormData( (prevData)=>({
            ...prevData,
            [name] : value,
        }))
    }

    const handleformSubmit = (event) => {
        event.preventDefault()
        setDisplayData({...formData});
        console.log(displayData)
        setFormData({
            firstName : '',
            lastName : '',
            email : ''
        });
    }

    console.log(displayData)

    return (
        <div>
            <h1> React Form  </h1>
            <form onSubmit={handleformSubmit}>
                <label>
                    First Name :
                    <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}/>
                </label>
                <br></br>
                <label>
                    Last Name :
                    <input 
                    type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}/>
                </label>
                <br></br>
                <label>
                    Email :
                    <input 
                    type='email'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                </label>
                <br></br>
                <button type='submit' >Submit</button>

            </form>

            {displayData && (
                <div>
                    <h2> Display Data : </h2>
                    <p> 
                        <strong> First Name :</strong> {displayData.firstName}
                   </p>
                   <p> 
                        <strong> Last Name :</strong> {displayData.lastName}
                   </p>
                   <p> 
                        <strong> Email Name :</strong> {displayData.email}
                   </p>
                </div>
            )}

        </div>
    )

}

export default Input;