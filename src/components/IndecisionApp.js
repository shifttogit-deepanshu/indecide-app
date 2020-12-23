import React from 'react'

import Action from './Action'

import Header from './Header'

import Addoption from './Addoption'

import Options from './Options'

import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleremoveall = this.handleremoveall.bind(this)
        this.handleaddoption  = this.handleaddoption.bind(this)
        this.handleaddoption = this.handleaddoption.bind(this)
        this.handleremoveoption = this.handleremoveoption.bind(this)
        this.handlepick = this.handlepick.bind(this)
        this.removetheOption = this.removetheOption.bind(this)
    
        this.state = {
            options : props.options,
            selectedOption : undefined
        }
        
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
        const options = JSON.parse(json)
       
        if(options){
        this.setState(()=>{
            return {
                options : options
            }
        })
       }
        }catch(e){

        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    
    handleremoveall(){
        this.setState(()=>{
            return {
                options : []
            }
        })
    }
    removetheOption(){
        this.setState(()=>{
            return {
                selectedOption : undefined
            }
        })
    }
    handlepick(){
        let item = Math.floor(Math.random()*this.state.options.length)
        
        this.setState(()=>{
            return {
                selectedOption: this.state.options[item]
            }
        })
        

    }
    handleremoveoption(gotoption){
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=> option !== gotoption)
            }
        })
    }
    handleaddoption(option){
        if(!option){
            return "Please add an option"
        }
        else if(this.state.options.indexOf(option)>-1){
            return "This option already exist"
        }


        this.setState((prevState)=>{
    
            return {
                options: prevState.options.concat(option)
            }
        })

    }
    
    render(){
        const title = "Indecision Application"
        const subtitle = "Put your life in the hands of a computer !!"
        return <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
        <Action todisable={this.state.options.length>0} pick={this.handlepick} />
        <Options removeall={this.handleremoveall} options={this.state.options} removeoption={this.handleremoveoption} />
        <Addoption addoption={this.handleaddoption}/>
        <OptionModal removeopt={this.removetheOption} selected={this.state.selectedOption}/>
        </div>
        
        </div>

    }
}

export default IndecisionApp;