import {v4 as uuidv4} from 'uuid'
import Header from "./Components/Header";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import { useState } from "react";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackForm from "./Components/FeedbackForm";

function App(hand){
    const [feedBack,setFeedback]=useState(FeedbackData);

    const addFeedback= (newFeedback) => {
        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedBack])
    }


    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedBack.filter((item)=> item.id !== id)) 
            //item.id is item ki id and != id mai id is function mai jo id gayi  deletefeedback(id) wali
        }
    };
    return(
        <>

            {/*
            <Header bgcolor='red' textcolor='wheat'/>
            
            above is the format for inline styling where 'bgcolor' 'textcolor' are the props defined in
            main function Header({prop1,prop2,prop3}) of Header.jsx file
            */}
            <Header />

            <FeedbackForm  handleAdd = {addFeedback} />
            <FeedbackStats  feed={feedBack}/>
            <FeedbackList feed={feedBack} hand={deleteFeedback}/>
                
        </>
    )
}

export default App;