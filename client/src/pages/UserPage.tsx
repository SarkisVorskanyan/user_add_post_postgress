import { Avatar, Col, Row } from "antd"
import React, { FC, useState, useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ChangeUserDataForm from "../components/ChangeUserDataForm"
import PostBlock from "../components/PostBlock"
import MainButton from "../components/UI/MainButton"
import UserInfoBlock from "../components/UserInfoBlock"
import { useAppDispatch, useAppSelector } from "../myHooks/Redux"
import { changeUserIfno, deleteUser } from "../store/action/User_actions"

const UserPage: FC = () => {

    const {userInfo} = useAppSelector(state => state.user)
    const {posts} = useAppSelector(state => state.post)
    const location = useLocation()
    const state: any = location.state
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [showForm, setShowForm] = useState<boolean>(false)
    const [name, setName] = useState<string | undefined>(userInfo?.name)
    const [surname, setSurname] = useState<string | undefined>(userInfo?.surname)

    const changeUserData = () => {
        setShowForm(!showForm)
    }

    const saveUserData = useCallback(() => {
        if(name !== '' || surname !== ''){
            dispatch(changeUserIfno({
                        id: state.id,
                        name: name,
                        surname: surname
                    }))
            setShowForm(!showForm)
        }
    }, [showForm])

    const deleteUserInfo = () => {
        dispatch(deleteUser(state.id))
        navigate(-1)
    }
    

    return (
    <Row>
        <Col xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }} >
            <Avatar size={200}>{userInfo?.name}</Avatar>
        </Col>
        <Col xs={{ span: 18, offset: 2 }} sm={{ span: 9, offset: 1 }}  lg={{ span: 6, offset: 2 }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {showForm ? <ChangeUserDataForm 
                                        setName={setName}
                                        setSurname={setSurname}
                                        name={name} 
                                        surname={surname} /> 
                : <UserInfoBlock name={name} surname={surname} />}
                <div>
                    {showForm ? <MainButton action={saveUserData} background="#2BE732" text='Save' /> : 
                    <>
                    <MainButton action={changeUserData} condition={showForm} background="#4578E7" text='Edit' />
                    <MainButton action={deleteUserInfo} background="#E73B2F" text='Delete' margin="0 0 0 40px" /> </>}
                </div>
            </div>    
        </Col>
        <Col xs={{ span: 24 }} >
            <PostBlock posts={posts} />
        </Col>
    </Row>
    )
}

export default UserPage