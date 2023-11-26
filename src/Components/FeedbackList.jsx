import FeedbackData from "../Data/FeedbackData"
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feed,hand}){
    if(!feed || feed.length==0){
        return <p>No Feedback Yet</p>
    }
    // const handleDelete=(id)=>console.log('list',id);
    return <div className="feedback-list">
        {feed.map((item)=>(
            <FeedbackItem key={item.id} item={item} handleDelete={hand}  />
        ))}
    </div>
}

export default FeedbackList