import React, { useState } from 'react';

function Inputa(props){

    const [formData , setFormData] = useState({
        firstName : '',
        lastName : '',
        email : ''
    });

    const [displayData , setDisplayData ] = useState();

    const handleFormSubmit = (event) =>{

        event.preventDefault();
        console.log(formData);
        setDisplayData({...formData});
        setFormData({
            firstName : '',
        lastName : '',
        email : ''
        })

        console.log(JSON.stringify(formData, null, 2));
        props.getdisplayData(formData)

    }

    const handleInputChange = (event) => {
        console.log(event.target.value)
        const { name , value} = event.target
        setFormData((prevData)=> ({
            ...prevData,
            [name]:value,
        }))

        console.log("handleInputChange for firstName"+formData.firstName);
        console.log("handleInputChange for lastName"+formData.lastName);
        console.log("handleInputChange for email"+formData.email);
    }

    const handleClear = ()=> {
        setDisplayData({
            firstName : '',
            lastName : '',
            email : ''
        })
    } 

return(
    <div>
        
        <form onSubmit={handleFormSubmit}>
            <label>
                FirstName : 
                <input 
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}/>
            </label>

            <label>
                LastName :
                <input 
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                />
            </label>

            <label>
                email : 
                <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}/>
            </label>

        <button type='submit'>submit</button>


        </form>

        <button onClick={handleClear}>CLear</button>


        {/* { console.log("this is the jsx doing the work"+displayData.firstName) } */}

        {displayData && (
            <div>
                {displayData.firstName}
                {displayData.lastName}
                {displayData.email}

            </div>
        )}


    </div>
)

}

export default Inputa;