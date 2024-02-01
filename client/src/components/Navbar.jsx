import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-700 p-6 text-white font-bold'>
        <div className='flex gap-5 justify-between'>
          <div>
           <h3>MANAGE USERS</h3>
          </div>
          <div className='flex gap-9'>
            <Link to='/create' className='hover:underline hover:text-gray-400'>Create</Link>
            <Link to='/users' className='hover:underline hover:text-gray-400'>Users</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar