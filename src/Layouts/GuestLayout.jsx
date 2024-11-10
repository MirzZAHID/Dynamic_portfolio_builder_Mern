import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function GuestLayout({children}) {
    const navigate = useNavigate()
    const [authToken, setToken] = useState(null)
    useEffect(()=>{
        const checkToken = () =>{
            const token = localStorage.getItem('token')
            if(token){
                setToken(token)
                navigate('/profile')
                return
            }
            
        }
        checkToken()
    })
  return (
    <>
    {!authToken &&
    <div>{children}</div>
    }
    </>
  )
}
