import React, {useEffect} from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Processing = () => {

    const {navigate} = useAppContext()
    const {nextUrl} = useParams()

    return (
        <div>Processing</div>
    )
}

export default Processing