import React, { Component } from 'react'

export default class SignIn extends Component {
    state={
        email:'',
        password:''
    }
    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
    }

    handleChanger= event=>{
        const {value,name} = event.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>

                    <input type="email" 
                    value={this.props.email} 
                    placeholder="Email"
                    onChange = {this.handleChanger} 
                    name='email' required/><br/>

                    <input type="password" 
                    value={this.props.password}
                    placeholder="Password" 
                    onChange={this.handleChanger} 
                    name='password' required/><br/>

                    <input type="submit" value="Do Submit"/>
                </form>            
            </div>
        )
    }
}
