import React, { PureComponent } from 'react';

class Formulaire extends PureComponent {

    state = {
        message: '',
        length: this.props.length
    }

    handleChange = (e) => {
        let message = { ...this.state.message }
        message = e.target.value
        this.setState({ message: message })
    }
    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo: pseudo,
            message: this.state.message
        }
        addMessage(message)
        this.setState({ message: '', length })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.createMessage()
        console.log("Submit");

    }

    onKeyUp = (e) => {
        if (this.state.message.length !== 1) {
            if (e.key === 'Enter') {
                this.createMessage()
            }
        }
    }
    render() {
        console.log(this.state.message.length);
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <textarea
                    required
                    maxLength="140"
                    onChange={this.handleChange}
                    onKeyUp={this.onKeyUp}
                    value={this.state.message}
                />
                <div className="info">
                    {this.state.length - this.state.message.length}
                </div>
                <button type="submit">
                    Envoyer !
                </button>

            </form>
        )
    }
}
export default Formulaire;