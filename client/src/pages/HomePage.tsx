import React, { FC, useEffect } from 'react'
import { Button, Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useAppDispatch, useAppSelector } from '../myHooks/Redux'
import { fetchAllUsers } from '../store/action/User_actions'

const HomePage: FC = () => {

    const dispatch = useAppDispatch()
    const {load} = useAppSelector(state => state.user);


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    return (
        <Row>
            <Col span={6} >
                <div style={{background: 'red'}}>
                    col-18 col-push-6
                </div>
            </Col>
            <Col span={18}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Marine" />
            </Card>
            </Col>
        </Row>
        // <h1>sdvhsuushuvushusuvhus</h1>
    )
}

export default HomePage