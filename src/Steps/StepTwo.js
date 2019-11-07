'use strict'
import React from 'react'
import {Jumbotron as jumbo, Container, Col, Image, Button} from 'react-bootstrap'

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {

      first_name: '',
      last_name: '',
      mail_add_groupname: '',
      facebook_page: '',
      step:2
    }
    // this.handleEmailChanged = this.handleEmailChanged.bind(this);
    // this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  change = e =>{
    this.setState({[e.target.name]:e.target.value});
  };

  onSubmit = e=>{

      e.preventDefault();

      console.log(this.state);
  };
  nextStep = () => {
    this.setState({
        step : this.state.step + 1
    })

    console.log(this.state);
}



  // handleEmailChanged (event) {
  //   this.setState({email: event.target.value})
  // }

  // handleEmailConfirmChanged (event) {
  //   this.setState({emailConfirm: event.target.value})
  // }

  render () {

    const {first_name,  last_name, mail_add_groupname,facebook_page} = this.state;

    return (
      <div>
        <h1>Contact Information
        </h1>
        <div className='row'>
          <div className='six columns'>
            <label>First Name
            </label>
            <input
              className='u-full-width required'
              placeholder='First Name'
              type='text'
              name="first_name"
              value= {first_name}
              onChange={e => this.change(e)}
              
              autoFocus
            />
          </div>
        
          <div className='six columns'>
            <label>Last Name
          </label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              name="last_name"
              value= {last_name}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Email Address
</label>
            <input
              className='u-full-width'
              placeholder='Email Address'
              type='email'
              
              name="mail_add_groupname"
              value= {mail_add_groupname}
              onChange={e => this.change(e)}

            />
          </div>
       
          <div className='six columns'>
            <label>Facebook Page
</label>
            <input
              className='u-full-width'
              placeholder='facebook_page'
              type='text'
              name="facebook_page"
              value= {facebook_page}
              onChange={e => this.change(e)}
              
            />
          </div>
        </div>

        <button onClick = {this.nextStep}>Click me</button>
      </div>
    )
  }
}
