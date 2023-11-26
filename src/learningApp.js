import React from "react"

function App(){
    //return React.createElement(
      //  'div',{className:"container"},React.createElement('h1',{},'chandrayan')
        //);

    const title='aman ki website is the title';
    const body='ye website ki body hai';
    //declaring array
    const comments = [
        {id:1,text:'comment one'},
        {id:2,text:'comment two'},
        {id:3,text:'comment three'}
    ]

    //how to use conditionals in react?
    const a =4;
    if(a==5) return <h1>loading..</h1>

    //showcomments variable ko true false karke dekhlo
    const showcomments = true;

    const commentdiv = (
        <div className="comments">
            <h3>comments ({comments.length})</h3>
            <ul>
                {comments.map((comments,index)=>(
                    <li>{comments.text}</li>
                    ))}
            </ul>
        </div>
    )

    return(
    <div>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {'namastee '}
        {10+7}
        <h3>hello</h3>

        

        {/* using terneary contitional below for variable 'showcomment'
            showcomments ? 'if true print this' : 'if false print this'
        */}

        {/* ```showcomments &&```  yeh statement sirf true ke case mai run hogi warna nahi hogi*/}
        {/* {showcomments && (
            <div className="comments">
            <h3>comments ({comments.length})</h3>
            <ul>
                {comments.map((comments,index)=>(
                    <li>{comments.text}</li>
                    ))}
            </ul>
        </div>
        )} */}
        

        {showcomments && commentdiv} {/* line 24 */}
        


    </div>)
}

export default App