import React, { FC } from 'react'

interface MainButtonProps {
    text: string,
    background: string,
    margin?: string,
    action?: () => void,
    condition?: boolean
}

const MainButton: FC <MainButtonProps> = ({text, background, margin, action, condition}) => {
    return (
        <button onClick={action} style={{margin: margin, backgroundColor: background, cursor: 'pointer'}}>{text}</button>
    )
}

export default MainButton