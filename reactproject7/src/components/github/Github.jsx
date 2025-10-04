import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const[data ,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Arsalanmuteebmir')
    //   .then(res => res.json())
    //   .then(data => {console.log(data);
    //    setData(data)
    // })
    // }, [])
    
  return (
    <div className='bg-blue-200 text-red-700 text-center p-4
    m-4 '>Github followers : {data.followers}
    <img src={data.avatar_url} alt="Git Iimage" width= "200" height={20} />
    </div>
  )
}

export default Github
export  const  githubloader = async () =>{
    const response = await fetch('https://api.github.com/users/Arsalanmuteebmir')
    return response.json()
}