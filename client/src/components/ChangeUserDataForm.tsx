import React, {FC, memo} from 'react'
import { Input } from 'antd'
import MainLabel from './UI/MainLabel'
import MainInput from './UI/MainInput'

interface ChangeUserDataFormPropsType {
    name: string | undefined,
    surname: string | undefined,
    setSurname: (e: string | undefined) => void,
    setName: (e: string | undefined) => void
}

const ChangeUserDataForm: FC <ChangeUserDataFormPropsType> = ({name, surname, setSurname, setName}) => {

    return (
        <div>
            <MainInput 
                    label='Անուն'
                    placeholder='Անուն'
                    onChange={setName}
                    value={name} />
            <MainInput 
                    label='Ազգանուն'
                    placeholder='Ազգանուն'
                    onChange={setSurname}
                    value={surname} />
        </div>
    )
}

export default memo(ChangeUserDataForm)