import React from 'react'

const Option = function(props){
    return <div>
    Option: {props.option}<button onClick={(e)=>{
        props.removeoption(props.option)
    }}>remove</button>
    </div>
}

export default Option 