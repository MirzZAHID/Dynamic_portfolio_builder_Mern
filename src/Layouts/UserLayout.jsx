import React, { useEffect, useState } from 'react'
import UserNavbar from '../Components/MainBar/UserNavbar'
import FooterComponent from '../Components/FooterComponent'
import {useNavigate} from 'react-router-dom'
export default function UserLayout({children}) {
    const navigate = useNavigate()
    const [authToken, setToken] = useState("null")
    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem('token')
            if(token){
                setToken(token)
                return;

            }
            else{
                navigate('/')
            }

        }
        checkToken()
    }, [])
    
    return (
        <>
        {authToken &&
        <div>
            <UserNavbar />
            {children}
            <FooterComponent />
        </div>
        }
        </>
    )
}

