import { Space, Spin } from 'antd'
import React, { FC } from 'react'

interface SpinnerProps {
    load: boolean
}

const Spinner: FC <SpinnerProps> = ({load}) => {
    return (
        <Space size="large">
            <Spin spinning={load} size="large" />
        </Space>
    )
}

export default Spinner