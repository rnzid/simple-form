
//ES6 arrow function
const Button = (props) => {
//console.log(props);
  return (
    <button type="button" className="btn btn-primary">{props.title}</button>
  )
}


function SmallButton({title,color}) {
    return <button type="button" className="btn btn-primary" style={{color:color,backgroundColor:"green"}}>{title}</button>
}

export {
    Button,SmallButton,
}

//export default Button


//old school react function
/* import React from 'react'

export default function Button() {
  return (
    <div>Button</div>
  )
}
 */