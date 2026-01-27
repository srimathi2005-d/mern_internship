import {useState} from 'react'

const Form = () => {
    const[form,setForm]=useState({
        name:"",
        email:"",
        age:"",
        department:""
    })


    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlform="name">Name: </label>
            <input type ="text" name="name" value={form.name} onChange={handleChange}/><br/>
            <label htmlform="email">Email: </label><br />
            <input type ="text" name="email" value={form.email} onChange={handleChange}/><br/>
            <label htmlform="age">Age: </label><br />
            <input type ="number" name="age" value={form.age} onChange={handleChange}/><br/>
            <label htmlform="department">Department: </label><br/>
            <input type ="text" name="department" value={form.department} onChange={handleChange}/><br/><br/>
            <button type="submit"> Submit</button><br/><br/>
        </form>
    </div>
  )
}

export default Form