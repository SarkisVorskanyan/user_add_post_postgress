import React, { FC } from 'react'
import { Comment, Avatar } from 'antd';
import PostInput from './PostInput';
import { PostType } from '../models/PostTypes';

interface PostBlockProps {
    posts: PostType[]
}

const PostBlock: FC <PostBlockProps> = ({posts}) => {
    return (
        <div style={{marginTop: 20}}>
            <PostInput />
            {posts.map((item, i) => 
                <Comment
                    key={i}
                    author={<a>{item.title}</a>}
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={item.title} />}
                    content={
                        <p style={{color: '#fff', fontSize: 20}}>{item.content}</p>
                    }
            />
            )}
        </div>
        
    )
}

export default PostBlock

