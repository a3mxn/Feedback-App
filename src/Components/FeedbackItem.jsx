import { useState } from "react"
import Card from "./Shared/Card";
import { FaTimes } from "react-icons/fa"

//here {usestate} is a hook
//what is hook??? may be a built in function in react that can change "state"...
//now, what is state? In React, "state" is like a special container where you can put
// information that might change while your web page or app is running.


function FeedbackItem({item, handleDelete}) {
    // const [nameOFstate,function_name] = useState(value);
    //usestate is used to enter a value to function "function_name" inside state "nameOFstate"
    // const [rating,setRating] = useState(7);
    // const [text,setText] = useState('This is am example of an feedback item');


    // const x=7;
    // const handleButtonClick = (id) =>{
    //   console.log(id);
    // }
    // const handleClick = () => {
    //     // (folder 2, video 3)
    //     // cannot do directly rating = 10 because state in react is immutable
    //     //when we want to add/change state we need to reset it,, copy all items and then add new item above it

    //     //pass value directly
    //     // setRating(30);

    //     //pass value by function
    //     setRating((x)=>{        //here x is previous value of state "setrating"
    //         return x+5;
    //     })
    // }

    // const handleDelete=(id)=>console.log('item',id);

  return (
    // <Card reverse={false}> to set reverse prototype as false or true in card.jsx
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>

      {/* <button onClick={handleClick}>button1</button> */}
      {/*button works for handdleClick() function*/}

    </Card>
  )
}

export default FeedbackItem
