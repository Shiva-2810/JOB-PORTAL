import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold flex justify-center'><span className='text-[#6A38C2]'>Latest & Top&nbsp;</span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    // ? means option chaining i.e. if jobs array is null then the app does not crashes rather returns undefined silently
                    allJobs.length <= 0 ? <span className='flex justify-evenly text-2xl font-bold '><li>No Jobs Available</li></span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJobs