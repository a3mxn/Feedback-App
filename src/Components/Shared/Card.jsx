import PropTypes from "prop-types"

function Card({children, reverse}) {
  return (
    //study more about prop children
    //className={`card ${reverse && 'reverse'}`}..... this is a conditional class
    //if reverse is true only then reverse calsss is displayed
    <div className='card' style={
      {backgroundColor: reverse ? 'rgba(0,0,0,0.4)': '#fff',
      color:reverse?'#fff':'#000',
    }
    }>
      {children}
    </div>
  )
}


//folderr 3 video 5.. i didnt used proptypes he told
Card.propTypes={
  children:PropTypes.node.isRequired,
  reverse:PropTypes.bool,
}

export default Card
