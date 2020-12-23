import React from 'react';

class Addoption extends React.Component{
    constructor(props){
        super(props)
        this.handleaddoption = this.handleaddoption.bind(this)
        this.state={
            error: undefined
        }
    }
    handleaddoption(e){
      
        e.preventDefault()
        
       let task = e.target.task.value.trim()

       
       const error = this.props.addoption(task)
       
       this.setState(()=>{
           return {
               error
           }
       })
        

       e.target.task.value = ''
    }
    render(){
        return <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleaddoption}>
        <input type="text" name="task"/>
        <button type="submit">ADD OPTION</button>
        </form>
        </div>
    }
}

export default Addoption;