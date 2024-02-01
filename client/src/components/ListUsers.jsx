import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ListUsers() {
  const [list, setList] = useState([])

  useEffect(() =>{
    const getUser = async() => {
      const response = await axios.get('http://localhost:3004/manage/users/getuser')
      setList(response.data)
    }
    getUser()
  },[list])

  const deleteUser = async(id) => {
    await axios.delete(`http://localhost:3004/manage/users/delete/` + id)
  }
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        list.map((list=> (
          <div className='flex items-center justify-center m-8' key={list._id}>
            <div className='w-80 h-70 rounded-3xl border border-solid border-black p-7'>
              <div className='card-header'>
                <h5>Nombre: {list.name}</h5>
              </div>

              <div className='card-body'>
                <p>Apellido: {list.lastName}</p>
                <p>Age: {list.age}</p>
                <p>phone: {list.phone}</p>
                <p>email: {list.email}</p>
              </div>

              <div className='mt-4 flex gap-4'>
                <button className='bg-red-600 text-white py-2 px-4 rounded-2xl hover:bg-red-500' onClick={() => deleteUser(list._id)}>Delete</button>
                <Link to={`/update/${list._id}`} className='bg-blue-600 text-white py-2 px-4 rounded-2xl hover:bg-blue-500'>Update</Link>
              </div>
            </div>
          </div>
        )))
      }
    </div>
  )
}

export default ListUsers