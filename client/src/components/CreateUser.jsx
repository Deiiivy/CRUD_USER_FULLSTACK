import React, { useState } from 'react'
import axios from 'axios'

function CreateUser() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    const userData = {
      name,
      lastName,
      age,
      phone,
      email
    }

    setName('')
    setLastName('')
    setAge(0)
    setPhone('')
    setEmail('')

    console.log(userData);
    await axios.post('http://localhost:3004/manage/users/create', userData)
    setShowAlert(true)
    
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <h1 className='font-bold text-center'>Create user</h1>
        <div className='flex flex-col'>
          <label>Name: </label>
          <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name'></input>

          <label>Last Name: </label>
          <input type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='lastName'></input>

          <label>Age: </label>
          <input type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age'></input>

          <label>phone: </label>
          <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone'></input>

          <label>Email: </label>
          <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
        </div>
        <button type='submit' className='bg-green-600 py-2 px-4 rounded-xl my-6 text-white hover:bg-green-700'>Submit</button>
      </form>
      {showAlert && <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4' role='alert'>
            <p className='font-bold'>Usuario creado con éxito!</p>
            <p>El usuario se ha creado correctamente.</p>
          </div>}
    </div>
  )
}

export default CreateUser