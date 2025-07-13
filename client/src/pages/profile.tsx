import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const { userName } = useParams<{ userName: string }>();
    return (
        <div>
        </div>
    )
}

export default UserProfile
