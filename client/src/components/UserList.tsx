import { Card, Row, Col } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { FC } from 'react'
import {IUser} from '../models/UserTypes'
import avatar from '../assets/img/dog.jpg'
import Spinner from './UI/Spinner'
import { useNavigate } from 'react-router-dom'
import { getOneUser } from '../store/action/User_actions'
import { useAppDispatch } from '../myHooks/Redux'
import { fetchAllPosts } from '../store/action/Post_actions'


interface UserListProps {
    users: IUser[],
    load: boolean,
    renderUserList: boolean
}


const UserList: FC <UserListProps> = ({users, load, renderUserList}) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const goToUserPage = async (item: IUser) => {
        await dispatch(getOneUser(item.id))
        await dispatch(fetchAllPosts(item.id))
        navigate(`userPage/${item.id}`, {state: item})
    }
    

    return (
        <Row gutter={[16, 24]} justify="space-around">
            <Spinner load={load} />
            {users.map((item, index) =>
            <Col key={index} xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }}>
                <Card
                    hoverable
                    style={{ width: 200, borderRadius: '20%', background: '#41A792' }}
                    cover={<img alt="example" src={avatar} />}
                    onClick={() => goToUserPage(item)}
                >
                    <Meta style={{background: '#41A792'}} title={`${item.name} ${item.surname}`} />
                </Card>
            </Col>
                )}
        </Row>
    )
}

export default UserList