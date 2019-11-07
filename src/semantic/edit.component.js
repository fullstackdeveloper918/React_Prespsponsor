// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeSponsorAmount = this.onChangeSponsorAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        tier_name: '',
        active: '',
        description:'',
      id:2,
        sponsor_amount:''
    }
  }

  // componentDidMount() {
  //     axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
  //         .then(response => {
  //             this.setState({ 
  //               person_name: response.data.person_name, 
  //               business_name: response.data.business_name,
  //               business_gst_number: response.data.business_gst_number });
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         })
  //   }

  componentDidMount() {
    // axios.get('http://localhost/presponsor/public/api/getPackage/'+ this.state.id)
    axios.get('http://localhost/presponsor/public/api/getPackage/'+ this.state.id)

        .then(response => {

          console.log("121212", response.data);
            this.setState({ 
              tier_name: response.data.package.tier_name, 
              active: response.data.package.active,
              description: response.data.package.description,
              sponsor_amount: response.data.package.sponsor_amount
            });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  onChangePersonName(e) {
    this.setState({
        tier_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
        active: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
        description: e.target.value
    })
  }

  onChangeSponsorAmount(e) {
    this.setState({
        sponsor_amount: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
        tier_name: this.state.tier_name,
        active: this.state.active,
        description: this.state.description,
        sponsor_amount: this.state.sponsor_amount
    };
    // axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
    axios.post('http://localhost/presponsor/public/api/updatePackage/'+this.state.id, obj)
        .then(res => console.log(res.data));
   // this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Package</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Tier name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.tier_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Active: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.active}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>Sponsor Amount: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.sponsor_amount}
                      onChange={this.onChangeSponsorAmount}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update package" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}

export default Edit