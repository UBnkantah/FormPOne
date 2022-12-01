import React, { useState } from 'react'

const Forms = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            textarea: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    );

    


    function handleChange(event) {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  type === "checkbox" ? checked : value
            }
        });
    }

    // console.log(formData.employment)

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='firstName'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
        required
        />


        <input type="text"
        placeholder='lastName'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
        required
        />


        <input type="email"
        placeholder='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
        />

        <fieldset>
            <legend>Current Employment Status</legend>
            <input 
                type="radio"
                id='unemployment'
                name='employment'
                value="unemployment"
                checked={formData.employment === "unemployment"}
                onChange={handleChange}
            />
            <label htmlFor="unemployed">Umemployed</label> <br />
            <input 
                type="radio"
                id='part-time'
                name='employment'
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label> <br />
            <input 
                type="radio"
                id='full-time'
                name='employment'
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <br />

        <label htmlFor="">What is your Favorite Color?</label>
        <br />
        <select name="favColor" id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <br />
        

        <textarea 
        name="textarea"
        value={formData.textarea} 
        id="" cols="30" rows="10" 
        onChange={handleChange}
        />


        <input type="checkbox"
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
        />


        <label htmlFor="isFriendly">Are you Friendly?</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Forms
