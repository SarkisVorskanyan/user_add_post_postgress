import React, { FC } from 'react'

interface MainLabelProps {
    text: string
}

const MainLabel: FC <MainLabelProps> = ({text}) => {
    return (
        <label style={{fontSize: 20, color: '#fff'}}>{text}</label>
    )
}

export default MainLabel