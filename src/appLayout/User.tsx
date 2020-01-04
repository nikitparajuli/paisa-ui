import React from 'react';
import { Avatar } from 'antd';

type UserProps = {};

export const User: React.FC<UserProps> = () => {
    return (
        <>
            <Avatar icon="user" />
        </>
    );
}