import React from 'react'

import Option from './Option'


class Options extends React.Component{
    render(){
        
        return <div>
        <button onClick={this.props.removeall}>Remove All</button>
        {this.props.options.map((option)=>{
            return <Option key={option} option={option} removeoption={this.props.removeoption}/>
        })}
        
      
        </div> 
    }
}

export default Options;
