import React from 'react'

function FeedbackStats({feed}) {

    let average = feed.reduce((acc,cur)=>
    {return acc + cur.rating},0) / feed.length

    average = average.toFixed(1);
    // average = average.toFixed(1).replace(/[.,]0$/,'');


  return (
    <div className='feedback-stats'>
      <h4>{feed.length} Reviews</h4>
      <h4>Average rating :{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats


// isNaN(average) ? 0 : average
// isNaN() checks if number is not a number (nan) or not
