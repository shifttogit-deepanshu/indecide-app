import React from 'react'

import Modal from 'react-modal'

class OptionModal extends React.Component{
    render(){
        return <div>
    <Modal
    isOpen={!!this.props.selected}
    onRequestClose={this.props.removeopt}
    contentLabel="Example Modal">
        <h1>Option Selected</h1>
        <p>{this.props.selected}</p>
        <button onClick={this.props.removeopt}>OKay</button>
    </Modal>
    </div>
    }
}

export default OptionModal;