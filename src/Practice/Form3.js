import React from 'react'
import axios from 'axios';

export default class Form extends React.Component {
    state = {
      // firstName: "",
      // lastName: "",
      // username: "",
      // email: "",
      // password: ""

      // userId:"",
      // title:"",
      // body:""
      grouptype:"",
      other_main_activity:"",
      group_name:"",
      nameError: "",


    };
  
    change = event => {
    //   this.props.onChange({ [e.target.name]: e.target.value });
      // this.setState({
      //   [e.target.name]: e.target.value
      // });
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });

    };
    validate = () => {
      let nameError = "";
      let emailError = "";
      // let passwordError = "";
  
      if (!this.state.grouptype) {
        nameError = "grouptype cannot be blank";
      }
  
      return true;
    };
    
    
    onSubmit = e => {
      e.preventDefault();

      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        
      }


      // this.props.onSubmit(this.state);

     // axios.post('https://app.prepsponsor.com/api/addTeam', this.state)

      console.log(this.state);
      // this.props.onSubmit(this.state);
    //   this.setState({
    //     firstName: "",
    //     lastName: "",
    //     username: "",
    //     email: "",
    //     password: ""
    //   });
    //   this.props.onChange({
    //     firstName: "",
    //     lastName: "",
    //     username: "",
    //     email: "",
    //     password: ""
    //   });
    };
  
    render() {

      const {grouptype, other_main_activity, group_name} = this.state
      return (
        <form onSubmit ={this.onSubmit}>
          <input
            name="grouptype"
            placeholder="First name"
            // value={this.state.firstName}
            value= {grouptype}
            onChange={event => this.change(event)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
            </div>
          <br />
          <input
            name="other_main_activity"
            placeholder="Last name"
            // value={this.state.lastName}
            value= {other_main_activity}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="group_name"
            placeholder="group_name"
            // value={this.state.username}
            value= {group_name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      );
    }
  }
  