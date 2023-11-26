import PropTypes from 'prop-types'    //not mandatory

function Header( {text,bgcolor,textcolor} ) {
  // function Header( {prop1,prop2,prop3} ){} ---- syntax to declare props

  const HeaderStyle={    //headerstyle is variable 
    background:bgcolor,   //background,color is keyword for background,color of text and bgcolor,textcolor
    color:textcolor,      //bgcolor,textcolor are props, value is defined in App.js in <Header prop1='' prop2=''>
  }

  return (               //there should be one main branch in return function(could be just <> and </>)
    <header style={HeaderStyle}>
      <div className="container">
        <h2>{text}</h2>   {/* we used value of prop 'text' here which is defined in line 21 */}
      </div>
    </header>
  )
}

Header.defaultProps={     //we can define our props here (interpreting to be just like external css)
  text:'Feedback UI',    //text:5   This will give error for different prototype (line 27)
  bgcolor:'rgba(0,0,0,0.4)',
  textcolor:'#ff6a95',
}

Header.propTypes={
  text: PropTypes.string, //
}

export default Header
