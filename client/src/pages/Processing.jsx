import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Processing = () => {

    const { navigate } = useAppContext()
    const { nextUrl } = useParams()

    useEffect(() => {
        if (nextUrl) {
            setTimeout(() => {
                navigate(`/${nextUrl}`)
            }, 8000);
        }
    })

    return (
        <div>Processing</div>
    )
}

export default Processing