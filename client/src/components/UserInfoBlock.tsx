import React, { FC } from 'react'
import { Avatar, Button, Col, Image, Row, Typography } from "antd"
const {Title} = Typography

interface UserInfoBlockPropsType {
    name: string | undefined,
    surname: string | undefined
}

const UserInfoBlock: FC <UserInfoBlockPropsType> = ({name, surname}) => {
    return (
        <div>
            <Title type="danger">{name}</Title>
            <Title type="danger" level={2}>{surname}</Title> 
        </div>
    )
}

export default UserInfoBlock