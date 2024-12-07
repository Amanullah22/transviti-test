import React from "react";
import './index.css'
import angle from '../../../Images/angle.png'
import Button from "../../GenericButton";
import search from '../../../Images/search_white.png'
import AllJobs from "./SeeAllJobs";

const JobsSection = () => {
    const searchBtnContent = <img src={search} className="searchImg"></img>
    const similar = ['Frontend', 'Backend', 'Graphic Designer']

    return <>
        <div className="jobs-container">
            <h1>Find your Dream Job, <span>Albert!</span></h1>
            <p>Explore the latest job openings and apply for the best opportunities available today!</p>

            <div className="search-section">
                <input className="jobs_search_field" placeholder="Job Title, Company, or Keywords" />
                <div className="location">
                    Select Location <img alt="angle" className="angle" src={angle}></img>
                </div>
                <div className="type">
                    Job Type <img alt="angle" className="angle" src={angle}></img>
                </div>
                <div>
                    <Button icon={true} content={searchBtnContent} className='searchBtn' />
                </div>
            </div>

            <div className="similar-section">
                <div className="similar-chips">
                    <span>Similar: &nbsp; </span>{similar.map((item) => (
                        <div className="chip">{item}</div>
                    ))}
                </div>

                <AllJobs type={'Featured'} />
                <AllJobs type={'Recommended'} />
            </div>
        </div>
    </>
}

export default JobsSection