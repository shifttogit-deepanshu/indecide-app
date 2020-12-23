import React from 'react';


class Action extends React.Component{  
    
    render(){
        return <div >
        <button className="big-button" disabled={!this.props.todisable} onClick={this.props.pick}>What should I do?</button>
        
        </div>
    }
}

export default Action;