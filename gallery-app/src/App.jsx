import React, { useState } from 'react'
import axios from 'axios'


const App = () => {

  const [userData, setUserData] = useState([])

const getData = async ()=> {
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
   console.log(response.data)

   setUserData(response.data)
}

let printUserData = 'no user available'

 

if (userData.length >0){
  printUserData = userData.map((elem, idx)=>{
   return (
  <div key={idx}>
    <div className="h-40 w-44 overflow-hidden rounded-xl">
      <img
        className="h-full w-full object-cover"
        src={elem.download_url}
        alt={elem.author}
      />
    </div>
    <h2 className="font-bold text-lg">{elem.author}</h2>
  </div>
);
  })
}

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
       onClick={getData}
      className='px-5 py-2 bg-green-500 rounded active:scale-95 mb-5'>
        Get Data
      </button>
      <div className='flex flex-wrap gap-4 overflow-y-auto'>
           {printUserData}
      </div>
      <div className='flex justify-center gap-8 mt-5'>
      <button
      onClick={()=> {
        if(index > 1 ){
          setIndex (index-1)
        }
      }}
      className='px-5 py-2 bg-amber-300 rounded text-black font-bold '>Prev</button>
      <button
      onClick={()=> {
        setIndex (index+1)
      }}
       className='px-5 py-2 bg-amber-300 rounded text-black font-bold '>Next</button>
       </div>
    </div>
  )
}

export default App