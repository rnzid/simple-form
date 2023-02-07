
//ES6 arrow function
const Button = (props) => {
//console.log(props);
  return (
    <button>{props.title}</button>
  )
}


function SmallButton(props) {
    return <button>{props.title}</button>
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