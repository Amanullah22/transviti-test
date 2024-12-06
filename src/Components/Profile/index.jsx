import React from 'react'
import './index.css'
import InfoSection from './InfoSection'
import JobsSection from './JobsSection'

const Profile = () => {

    return <>
        <div className='profile-main-container'>
            <InfoSection />
            <JobsSection />
        </div>
    </>
}

export default Profile