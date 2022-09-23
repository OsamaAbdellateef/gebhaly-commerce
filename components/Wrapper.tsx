import React from 'react'
import ResponsiveAppBar from './Navbar/Navbar'
interface Props { 
    children?:React.ReactNode
}
export default function Wrapper({children, ...props}:Props) {
    return (
       <>
        <ResponsiveAppBar />
        {children}
       </>
    )
}  