import React from "react"

function Button(props){
return (
  <div>
<button style={{width: "250px",height : "30px"}}>{props.text}</button>
</div>
)
}
export default Button