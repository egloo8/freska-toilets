import React from 'react'
import './toilet.css'

const Toilet = ({ id, type, queue_time }) => (
    <div className='outer'>
        <div className='inner'>
            <div className='smallGridItem'>
                <span className='title'>Toilet no. </span>
                <span>{id}</span>
            </div>
            <div className='smallGridItem'>
                <span className='title'>Type: </span>
                {type}
            </div>
            <div className='bigGridItem'>
                <span className='title'>Queue time: </span>
                {queue_time} minutes?
            </div>
        </div>
    </div>
)

export default Toilet