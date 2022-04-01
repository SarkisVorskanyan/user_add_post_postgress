import { Card, Row, Col } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { FC } from 'react'
import {IUser} from '../models/UserTypes'
import avatar from '../assets/img/dog.jpg'

interface UserListProps {
    users: IUser[]
}


const UserList: FC <UserListProps> = ({users}) => {
    return (
        <Row gutter={[16, 24]} justify="space-around">
            {users.map((item, index) =>
            <Col key={index} xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }}>
                <Card
                    hoverable
                    style={{ width: 200, borderRadius: '20%', background: '#41A792' }}
                    cover={<img alt="example" src={avatar} />}
                >
                    <Meta style={{background: '#41A792'}} title={`${item.name} ${item.surname}`} />
                </Card>
            </Col>
                )}
        </Row>
    )
}

export default UserList