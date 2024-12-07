import React from "react";
import Card from '../../../../Images/job_card.png'
import './index.css'

const AllJobs = (props) => {
    let jobs = [1, 2, 3, 4, 5]

    const getJobs = () => {
        return <div className="card-container">
            <img src={Card} alt="Card" className="card"></img>
        </div>
    }

    return <>
        <div className="all-jobs-container">
            <hr style={{ border: '1px solid #E9ECEF' }} />
            {props.type} Jobs&nbsp;&nbsp;<a href='#' style={{ color: '#0154AA' }}>See {props.type} Jobs</a>
            <div className="jobs-section">
                {jobs.map((item) => (
                    getJobs()
                ))}
            </div>
        </div>
    </>
}

export default AllJobs