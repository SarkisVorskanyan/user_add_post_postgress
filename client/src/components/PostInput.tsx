import React, { FC } from 'react'
import { Comment, Avatar } from 'antd';
import MainInput from './UI/MainInput';
import { Input } from 'antd'
import MainLabel from './UI/MainLabel';
import MainButton from './UI/MainButton';

const PostInput: FC = () => {

    const { TextArea } = Input
    
    return (
        <div>
            <MainLabel text='Post' />
            <TextArea style={{fontSize: 22, marginBottom: 20}} rows={4} placeholder="Post" />
            <MainButton background="#2BE732" text='Add Post' />
        </div>
       
    )
}

export default PostInput