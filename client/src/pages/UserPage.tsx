import { Avatar, Button, Col, Image, Row, Typography } from "antd"
import React, { FC, useEffect } from "react"
import { useLocation } from "react-router-dom"
import ChangeUserDataForm from "../components/ChangeUserDataForm"
import Spinner from "../components/UI/Spinner"
import UserInfoBlock from "../components/UserInfoBlock"
import { IUser } from "../models/UserTypes"
import { useAppSelector } from "../myHooks/Redux"

const UserPage: FC = () => {

    const {userInfo} = useAppSelector(state => state.user)
    const location = useLocation()
    const state: any = location.state
    console.log(state);
    const {Title} = Typography

    useEffect(() => {
        console.log(userInfo)
    })
    

    return (
    <Row>
        <Col xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }} >
            <Avatar size={200}>{state.name}</Avatar>
        </Col>
        <Col xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <UserInfoBlock name={state.name} surname={state.surname} />
                <ChangeUserDataForm />
                <div>
                    <button style={{cursor: 'pointer', backgroundColor: '#4578E7'}}>Edit</button>
                    <button style={{marginLeft: 40, backgroundColor: '#E73B2F', cursor: 'pointer'}}>Delete</button>
                </div>
            </div>    
        </Col>
    </Row>
    )
}

export default UserPage