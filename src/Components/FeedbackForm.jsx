import Card from "./Shared/Card"
import { useState } from "react"
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const[text,setText]=useState('');
    const[btnDisabled,setBtnDisabled]=useState(true);
    const [rating, setRating] = useState(10)
    const[message,setMessage]=useState('');
    const handleTextChange=(e)=>{
        if(text==null){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text.trim().length<9){
            setBtnDisabled(true);
            setMessage('Please Entre at least 10 words')
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }


        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // inbuilt function 
        if(text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            handleAdd(newFeedback)

            setText('')
        }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
      <h2>How would you rate out service?</h2>
        <RatingSelect  select={(rating)=>setRating(rating)} />
      <div className="input-group">
        <input type="text" placeholder="type anything" 
        onChange={handleTextChange} value={text}/>
        <Button type="submit" version='primary' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className="message">{message}</div>}
      {/* {message &&  .........} */}
      {/* it check message is empty or not */}
      </form>
    </Card>
  )
}

export default FeedbackForm
