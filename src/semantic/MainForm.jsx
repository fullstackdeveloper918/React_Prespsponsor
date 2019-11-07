import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import AdditionalInfo from './AdditionalInfo';

import StepConfirmation from './StepConfirmation';
import StepTable from './StepTable';
import Success from './Success';

import axios from 'axios';
import { emptyStatement } from '@babel/types';
// import './Syntact.css'
class MainForm extends Component {
    state = {
        step: 1,
        grouptype:'',
        other_main_activity:'',
        group_name:'',
        main_activity:'',
        email_org:'',
        member_participants:'',
        address:'',
        facebook_page:'',
        first_name: '',
        last_name: '',
        email: '',
        errorMessage:'',
        posts:[],
        userId:'',
        title:'',
        body:'',
        nameError: '',
        emailError:'',
        participantError:'',
        group_nameError:'',
        other_activityError:'',
        first_nameError:'',
        last_nameError:'',
        mail_add_groupnameError:'',

    }

     validate = () => {
        let nameError = "";
        let emailError = "";
        let participantError ="";
        let group_nameError ="";
        let other_activityError = "";
        let first_nameError = "";
        let last_nameError = "";
        let mail_add_groupnameError = "";

        // let passwordError = "";
    
        if (!this.state.address) {
          nameError = "zipcode can not be empty";
        }
    
        if (!this.state.email_org.includes("@")) {
          emailError = "Please add valid email must contain @";
        }
        
        if (!this.state.member_participants) {
            participantError = "Number of participant can not be empty";
          }

          if (!this.state.group_name) {
            group_nameError = "Group name can not be empty";
          }
          if (!this.state.other_main_activity) {
            other_activityError = "Activity can not be empty";
          }
          // second page validation
          if (!this.state.first_name) {
            first_nameError = "first name can not be empty";
          }

          if (!this.state.last_name) {
            last_nameError = "last name can not be empty";
          }

          if (!this.state.mail_add_groupname) {
            mail_add_groupnameError = "Email Address can not be empty";
          }



        if (emailError || nameError || participantError || group_nameError || other_activityError||first_nameError||last_nameError||mail_add_groupnameError) {
          this.setState({ emailError, nameError, participantError,  group_nameError, other_activityError, first_nameError, last_nameError, mail_add_groupnameError});
          return false;
        }
    
        return true;
      };

    nextStep = () => {

        const isValid = this.validate();
        if (isValid) {

            console.log(23423);
          console.log(this.state);
        }
        const { step, grouptype, address, email_org, member_participants,group_name, other_main_activity, first_name, last_name,mail_add_groupname} = this.state

        if(step>1?first_name&&last_name&&mail_add_groupname:address&&email_org&&member_participants&&group_name&&other_main_activity )
        {
        this.setState({
            step : step + 1
        }) 
    
        
        // this.setState({
        //     address:this.address

        // })

        // console.log(address)
        // console.log(this.state);
  
        const cat = {
            grouptype:this.state.grouptype,
            group_name:this.state.group_name,
            other_main_activity:this.state.other_main_activity,
            main_activity:this.state.main_activity,
            email_org:this.state.email_org,
            member_participants:this.state.member_participants,
            address:this.state.address,
            facebook_page:this.state.facebook_page,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email
        }
        console.log(cat);
        if(step ==4)
        {
                axios.post('https://app.prepsponsor.com/api/addTeam',cat)
                console.log("dfgdf", cat);
        }
        }

    }
        componentDidMount(){
            axios.post('https://app.prepsponsor.com/api/getSponsors/'+this.address)
            .then(response=>{
               
                this.setState({posts:response.data})
            })
            .catch(error=>{
                console.log(error);
                this.setState({errorMessage:"error retreiving data"});
            })
    }


    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    }
   
    
    render(){
        const {step} = this.state;
        
        const {grouptype,other_main_activity, group_name,main_activity, email_org, member_participants,  firstName, lastName, email, age, city, country, userId, title, body, address, nameError, emailError,participantError, group_nameError, other_activityError, first_nameError, last_nameError, mail_add_groupnameError} = this.state;
        const values = {grouptype,other_main_activity, group_name,main_activity, email_org, member_participants,firstName, lastName, email, age, city, country, userId, title, body,address, nameError, emailError, participantError, group_nameError, other_activityError, first_nameError, last_nameError, mail_add_groupnameError };
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <AdditionalInfo 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}

                    callPrep = {this.callPrep}
                    />
        case 3:
            return <StepTable 
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                                callPrep = {this.callPrep}
                                />
        case 4:
            return <StepConfirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    data={this.state.address}
                   
                   
                    />
        case 5:
            return <Success   />
        }
    }
}

export default MainForm;