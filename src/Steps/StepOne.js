'use strict'
import React from 'react'
import {Jumbotron as jumbo, Container, Col, Image, Button} from 'react-bootstrap'


export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      grouptype: '', 
      other_main_activity: '',
      group_name:'',
      main_activity:'',
      email_org:'',
      address:'',
      member_participants:'',
      step: 1

    }
    // this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    // this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  // handleFirstNameChanged (event) {
  //   this.setState({firstName: event.target.value})
  // }

  // handleLastNameChanged (event) {
  //   this.setState({lastName: event.target.value})
  // }

  change = e =>{
    this.setState({[e.target.name]:e.target.value});
  };

  onSubmit = e=>{

      e.preventDefault();
      console.log(this.state);
  };

  goToNext() {
    const { step } = this.state;
    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      alert("Submitting");
    }
  }
  nextStep = () => {
    // const { step } = this.state
    this.setState({
        step : this.state.step + 1
    })

    console.log(this.state);
}
 

  render () {

    const {grouptype,  other_main_activity, group_name,main_activity, email_org,  address, member_participants } = this.state;
    return (
      <div>
       <h1> Group Information</h1>

        <div className='row'>
          <div className='six columns'>
            <label>What type of group are you representing?
            </label>
            <input
              className='u-full-width'
              placeholder='group type'
              type='text'
              name="grouptype"
              
              value= {grouptype}
              onChange={e => this.change(e)}
              autoFocus
            />
          </div>
          <div className='six columns'>
            <label>Other - What activity does your organization do?</label>
            <input
              className='u-full-width'
              placeholder='Other main activity'
              type='text'
              name="other_main_activity"
              // onChange={this.handleFirstNameChanged}
              // value={this.state.firstName}
              value= {other_main_activity}
              onChange={e => this.change(e)}

              // onChange={this.handleLastNameChanged}
              // value={this.state.lastName}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>What is the name of your organization?</label>
            <input
              className='u-full-width'
              placeholder='Group name'
              type='text'
              name= "group_name"
              value= {group_name}
              onChange={e => this.change(e)}
              
              // onChange={this.handleLastNameChanged}
              // value={this.state.lastName}
            />
          </div>
          <div className='six columns'>
            <label>Group’s Main Activity</label>
            <input
              className='u-full-width'
              placeholder='main_activity'
              type='text'
              name= "main_activity"
              value= {main_activity}
              onChange={e => this.change(e)}

              // onChange={this.handleLastNameChanged}
              // value={this.state.lastName}
            />
          </div>
        </div>

        <div className='row'>
          <div className='six columns'>
            <label>Mailing address for the organization</label>
            <input
              className='u-full-width'
              placeholder='email_org'
              type='text'
            
              name= "email_org"
              value= {email_org}
              onChange={e => this.change(e)}
              // onChange={this.handleLastNameChanged}
              // value={this.state.lastName}
            />
          </div>
          <div className='six columns'>
            <label>In this year’s group, how many youth/student participants do you estimate will be enrolled?</label>
            <input
              className='u-full-width'
              placeholder='member_participants'
              type='text'
              name= "member_participants"
              value= {member_participants}
              onChange={e => this.change(e)}
              // onChange={this.handleLastNameChanged}
              // value={this.state.lastName}
            />
          </div>

        </div>

        <button type="submit" onClick = {this.nextStep}>Click me</button>
      </div>
    )
  }
}
