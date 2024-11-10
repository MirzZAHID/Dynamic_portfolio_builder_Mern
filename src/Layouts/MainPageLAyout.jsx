import React, { useEffect, useState } from 'react'
import Navbar from '../Components/MainBar/Navbar'
import FooterComponent from '../Components/FooterComponent'
import {useNavigate} from 'react-router-dom'

export default function MainPageLAyout({ children }) {
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
        <div>
            <Navbar />
            {children}
            <FooterComponent />
        </div>
        }
        </>
    )
}
