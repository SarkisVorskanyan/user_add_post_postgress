import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/UI/Spinner'
import { useAppDispatch } from '../myHooks/Redux'
import { fetchAllUsers } from '../store/action/User_actions'

const LoadPage: FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const getData = () => {
        setTimeout(() => {
            navigate('/users')
        }, 2000)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Spinner load={true} />
    )
}

export default LoadPage