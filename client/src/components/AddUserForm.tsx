import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { DataInputNewUser } from '../models/DataInputNewUser';

interface AddUserFormProps {
    createNewUser: (data: DataInputNewUser) => void,
    setRenderUserList: (renderUserList: boolean) => void,
    renderUserList: boolean
}

const AddUserForm: FC <AddUserFormProps> = ({createNewUser, setRenderUserList, renderUserList}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<DataInputNewUser>();

 
    const onSubmit: SubmitHandler<DataInputNewUser> = (data: DataInputNewUser) => {
        createNewUser(data)
        setRenderUserList(!renderUserList)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column'}}>
                    <label style={{fontSize: 20, color: '#fff'}}>Անուն</label>
                    <input placeholder='Անուն' autoComplete='off' {...register("name", {required: true, maxLength: 20})} />
                    {errors.name && <span style={{color: 'red'}}>This field is required</span>}
                </div>
            
            <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column'}}>
                <label style={{fontSize: 20, color: '#fff'}}>Ազգանուն</label>
                <input placeholder='Ազգանուն' autoComplete='off' {...register("surname",  {required: true, maxLength: 20})} />
                {errors.surname && <span style={{color: 'red'}}>This field is required</span>}
            </div>
           
            <button style={{ background: "red", color: '#fff' }} type='submit' >
                Ստեղծել
            </button>
        </form>
    )
}

export default AddUserForm
