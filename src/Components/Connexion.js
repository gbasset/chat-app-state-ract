import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
export default class Connexion extends PureComponent {
    state = {
        pseudo: '',
        goToChat: false
    }
    handleChange = (e) => {
        let pseudoInput = e.target.value
        this.setState({ pseudo: pseudoInput })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ goToChat: true })
    }
    render() {
        console.log(this.state.pseudo);
        const { pseudo, goToChat } = { ...this.state }
        if (goToChat) {
            return <Redirect push to={`pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className="connexionBox">
                <form onSubmit={this.handleSubmit} className="connexion">
                    <input
                        value={pseudo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="pseudo"
                        required
                    />
                    <button type="submit"> Go</button>
                </form>
            </div >
        )
    }
}
