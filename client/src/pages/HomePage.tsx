import React, { FC, useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '../myHooks/Redux'
import { createUser, fetchAllUsers } from '../store/action/User_actions'
import UserList from '../components/UserList'
import AddUserForm from '../components/AddUserForm'
import { DataInputNewUser } from '../models/DataInputNewUser'
import Spinner from '../components/UI/Spinner'

const HomePage: FC = () => {

    const dispatch = useAppDispatch()
    const {users, load} = useAppSelector(state => state.user)
    const {Title} = Typography

    const [renderUserList, setRenderUserList] = useState<boolean>(false)

    const createNewUser = async (data: DataInputNewUser) => {
        await dispatch(createUser(data))
        await dispatch(fetchAllUsers())
        
    }


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    
    return (
        load ? <Spinner load={load} /> : <Row>
        <Col span={6} >
            <AddUserForm renderUserList={renderUserList} setRenderUserList={setRenderUserList} createNewUser={createNewUser} />
        </Col>
        <Col span={18}>
            <Title style={{textAlign: 'center', color: '#fff'}}>Summary Count users {users.length}</Title>
            <UserList users={users} load={load} renderUserList={renderUserList} />
        </Col>
    </Row>
    )
}

export default HomePage