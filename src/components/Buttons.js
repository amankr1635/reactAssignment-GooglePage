import React from "react"

function Button(props){
return (
  <div>
<button style={{width: "120px",height : "30px"}}>{props.text}</button>
</div>
)
}
export default Button