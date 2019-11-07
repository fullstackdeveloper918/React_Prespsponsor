import React from 'react'
import {Jumbotron as jumbo, Container, Col, Image,  ButtonToolbar, Modal, Checkbox} from 'react-bootstrap'
import { Form, Button, Table} from 'semantic-ui-react';
import  axios from 'axios';


class StepConfirmation extends React.Component{

  constructor(props, context) {
    super();

  //   this.state ={
  //     posts:[],
  //     errorMessage:''
  // }

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      posts:[],
      errorMessage:'',
      loading: true
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount(){
      axios.get('https://app.prepsponsor.com/api/selectPackage/')
      .then(response=>{
          // console.log("new datauuu", response);

          this.setState({
            posts:response.data.success,
            loading: false
          
          })
      })
      .catch(error=>{
          console.log(error);
          this.setState({errorMessage:"error retreiving data"});
      })
}


   
  render() {
    const { values } = this.props;

    // console.log("Here is props", values.address);

    const {posts, errorMessage}=this.state

    console.log("package data", posts);


    return (
        <div>

      <h1> Confirmation </h1>
        <p>Below is Your Desired Sponsorship

        </p>
        {

this.state.loading? <div class="ui segment">
<p></p>
<div class="ui active dimmer">
  <div class="ui huge text loader">Loading</div>
</div>
</div>:null
}


        <table class="ui single line table">
            <thead>
    <tr>
     
      <th>Tier Name (Levels)</th>
      <th>Active</th>
      <th>Description of Sponsorship Level</th>
    <th>Sponsor $ Amount</th>
    <th>Slots Available</th>
    <th>Total</th>
    </tr>
  </thead>
  <tbody>

  {
    
            posts.length?posts.map(post=> <tr>
                
               <td>{post.tier_name}</td>
               <td>{post.active}</td>
               <td>{post.description}</td>
               <td>{post.sponsor_amount}</td>
               <td>{post.slot_available}</td>
               <td>{post.Total}</td>
               </tr>
            ):
           null
           }
           {
                   errorMessage?<div><h2>{ errorMessage}</h2></div>:null
           }




    {/* <tr>
     
      <td>Gold</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>5555</td>
     
    </tr> */}
    {/* <tr>
      
      <td>Silver</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>34334</td>
    
    </tr>
    <tr>
    
      <td>@twitter</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>3434</td>
    </tr> */}
   
  </tbody>
</table>
<p>At the end of your sponsorship campaign you will receive the net proceeds (%amount% less 15% transaction fee)</p>
<br />
<p>Before clicking the CONFIRM button, please read the Sponsorship Agreement.
</p>
{/* 
<Modal
   trigger={<Button>Show Modal</Button>}
    header='Reminder!'
    content='Call Benjamin regarding the reports.dfggggggggggggggggg'
    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  />
<br /><br/> */}

<ButtonToolbar>
        {/* <Button bsStyle="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <label>
        <input  type="checkbox" onClick={this.handleShow} />I have read and accepted the terms and conditions
      
        </label>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
            Sponsorship Agreement

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>TERMS OF AGREEMENT:</h4>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} >Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>

      <div className="button-center">
<button class="ui button" onClick={this.back}>
            Back
          </button>
          <div class="ui button" tabindex="0" onClick={this.saveAndContinue}>
            Save And Continue 
          </div>


          </div>

        <br /><br />
      </div>
    );

  }
 

}

export default StepConfirmation