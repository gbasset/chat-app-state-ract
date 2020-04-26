import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'
import Formulaire from './Components/Formulaire';
import Message from './Components/Message';
import base from './base'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class App extends Component {
  state = {
    messages: {

    },
    pseudo: this.props.match.params.pseudo
  }
  messageref = createRef()
  addMessage = (message) => {
    const messagesInState = { ...this.state.messages }
    messagesInState[`message-${Date.now()}`] = message
    Object.keys(messagesInState).slice(0, -30).forEach(key => {
      messagesInState[key] = null
    })
    //    messagesInState[`${Math.floor(Math.random() * Math.floor(8999879879878978987))}`] = message
    this.setState({ messages: messagesInState })
  }
  // Differentiate user
  isUser = pseudo =>
    pseudo === this.state.pseudo

  componentDidMount() {
    base.syncState('/',
      {
        context: this,
        state: 'messages'
      })
  }
  componentDidUpdate() {
    const ref = this.messageref.current
    ref.scrollTop = ref.scrollHeight
  }
  render() {
    console.log('isUser', this.isUser);
    const messages = Object.keys(this.state.messages).map(
      key =>
        <CSSTransition
          timeout={200}
          classNames="fade"
          key={key}
        >
          <Message
            pseudo={this.state.messages[key].pseudo}
            message={this.state.messages[key].message}
            isUser={this.isUser}
          />
        </CSSTransition>
    )
    return (
      <div className='box' >
        <div>
          <div className="messages" ref={this.messageref}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
          length={140}
          addMessage={this.addMessage}
          pseudo={this.state.pseudo}
        />
      </div>
    )
  }
}

export default App
