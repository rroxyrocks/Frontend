import React from 'react'

const Createaccount = () => {
  return (
    <div  className='w-full h-screen bg-[#819381] flex justify-center items-center p-4'>
    <form className='flex flex-col max-w-[600px] w-full'>
   <div className='pb-8'>
    <div className='text-center'>
            <p className='text-4xl font-bold inline  text-white'>Enter in your information to make an account</p>
            
        </div>
        </div>
    <input className='my-4 p-2 bg-[#f3f5f3]' type="text" placeholder='First name'/>
    <input className='my-4 p-2 bg-[#f3f5f3]' type="text" placeholder='Last name'/>
    <input className='my-4 p-2 bg-[#f3f5f3]' type="text" placeholder='Username'/>
    <input className='my-4 p-2 bg-[#f3f5f3]' type="text" placeholder='Password'/>
    
    <button className='bg-[#1c1f1c] hover:bg-[#7b857b] text-white rounded px-4 py-3 my-8 mx-auto flex items-center' type='submit'> Create </button>
    </form> 
</div>
  )
}

export default Createaccount