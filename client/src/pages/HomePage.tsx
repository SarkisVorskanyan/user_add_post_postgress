import React, { FC, useEffect } from 'react'
import { Col, Row } from 'antd'
import { useAppDispatch, useAppSelector } from '../myHooks/Redux'
import { createUser, fetchAllUsers } from '../store/action/User_actions'
import UserList from '../components/UserList'
import AddUserForm from '../components/AddUserForm'

const HomePage: FC = () => {

    const dispatch = useAppDispatch()
    const {users, error, load} = useAppSelector(state => state.user);

    const createNewUser = () => {
        //dispatch(createUser(data))
        dispatch(fetchAllUsers())
    }


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    return (
        <Row>
            <Col span={6} >
                <AddUserForm />
            </Col>
            <Col span={18}>
            <UserList users={users} />
            </Col>
        </Row>
    )
}

export default HomePage