import React, { FC } from 'react'
import { Input } from 'antd'

interface MainInputProps {
    label?: string,
    value: string | undefined,
    placeholder?: string,
    onChange: (e: string | undefined) => void
}

const MainInput: FC <MainInputProps> = ({label, value, placeholder, onChange}) => {
    return (
        <>
            <label style={{fontSize: 20, color: '#fff'}}>{label}</label>
            <Input style={{marginBottom: 20, fontSize: 20}}
                   onChange={(e) => onChange(e.target.value)}
                   value={value}
                   placeholder={placeholder} />
        </>
    )
}

export default MainInput