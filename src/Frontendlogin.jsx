import React from 'react'
import Createaccount from './Createaccount'

const Frontendlogin = () => {
  return (
    <div  className='w-full h-screen bg-[#819381] flex justify-center items-center p-4'>
      
   <form className='flex flex-col max-w-[600px] w-full'>
   <div className='pb-8'>
    <div className='text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-green-700 text-white'>Login</p>
            
        </div>
        </div>
    <input className='bg-[#f3f5f3] p-2' type="text" placeholder='Username'/>
    <input className='my-4 p-2 bg-[#f3f5f3]' type="text" placeholder='Password'/>
    
    <button className='bg-[#1c1f1c] hover:bg-[#7b857b] text-white rounded px-4 py-3 my-8 mx-auto flex items-center' > Log in</button>
    <button className='bg-[#1c1f1c] hover:bg-[#7b857b] text-white rounded px-4 py-3 my-8 mx-auto flex items-center' > Make a new account</button>
    </form> 
</div>
  )
}

export default Frontendlogin