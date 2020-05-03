import React, { PureComponent } from 'react';

import "emoji-mart/css/emoji-mart.css";
import '../App.css'
import { Picker } from "emoji-mart";
class Formulaire extends PureComponent {

    state = {
        message: '',
        emojiPickerState: false,
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
    triggerPicker = (event) => {
        event.preventDefault();
        this.setState({ emojiPickerState: !this.state.emojiPickerState });
    }
    render() {
        let emojiPicker;
        if (this.state.emojiPickerState) {
            emojiPicker = (
                <Picker
                    title="Pick your emoji…"
                    emoji="point_up"
                    onSelect={emoji => this.setState({ message: this.state.message + emoji.native }
                        // ,this.setState({ emojiPickerState: !this.state.emojiPickerState })
                    )}
                    i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}
                    style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: '2000' }}
                />
            );
        }


        console.log(this.state.message.length);
        return (
            <form onSubmit={this.handleSubmit} className="form">
                {emojiPicker}
                <textarea
                    required
                    maxLength="140"
                    onChange={this.handleChange}
                    onKeyUp={this.onKeyUp}
                    value={this.state.message}
                />
                <button className="btnSmile"

                    onClick={this.triggerPicker}
                >

                    <span role="img" aria-label="">
                        😁
            </span>
                </button>
                <div className="info">
                    {this.state.length - this.state.message.length}
                </div>
                <button type="submit">
                    Envoyer !
                </button>

            </form >
        )
    }
}
export default Formulaire;