import React, {useState} from 'react'


function Input () {

    const [formData , setFormData ] = useState({
        firstName : ' ',
        lastName  : ' ',
        email : ' '
    })

    const [displayData , setDisplayData] = useState(null)


    const handleChange = (e) => {
        
        const { name , value } = e.target;
        console.log(e.target.value)
        setFormData( (prevData)=>({
            ...prevData,
            [name] : value,
        }))
    }

    const handleSubmit = (event) => {
        console.log('this is handle submit'+this.event)
        event.preventDefault()
        setDisplayData({...formData})
        setFormData({
            firstName : '',
            lastName : '',
            email : ''
        })
        
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                    First Name :
                    <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}/>
                </label>

                <br></br>

                <label>
                    Last Name :
                    <input 
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}/>
                </label>
                <br></br>
                <label>
                    Email 
                    <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}/>
                </label>
                <br></br>

                <button type='submit' > Submit.. </button>

            </form>


    


        </div>
    )

}


export default Input 