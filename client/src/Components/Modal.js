import React from 'react'
import '../Css/modal.css'

class Modal extends React.Component {
    render() {
        return (
            <div id='modalWrapper'>
                <div id='modal-button' onClick={this.props.closeHandler}>Exit</div>
                <h1>{this.props.user ? this.props.greeting : 'Please log in'}</h1>
                <form onSubmit={this.props.loginHandler}>
                    <input type="email" name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input id='signIn-button' type='submit'/>
                </form>
                <button onClick={this.props.logOut}>Sign Out</button>
                <button onClick={this.props.googleHandler}>Sign in with google</button>
            </div>
        )
    }
}

export default Modal