import React, { Component } from 'react';
import { Form, Button, Table, Dimmer, Loader, Image,Segment } from 'semantic-ui-react';

import  axios from 'axios';

class Success extends Component{

    constructor(props){

        super(props)

        this.state ={

            address: this.props.address,
            posts:[],
            errorMessage:'',
            loading: true
        }
    }

    componentDidMount(){
        axios.post('https://app.prepsponsor.com/api/getSponsors/'+this.state.address)
        .then(response=>{
        //    console.log(response);

            this.setState({
                posts:response.data.sponsors,
                loading: false
                
            })
        })
        .catch(error=>{
            console.log(error);
            this.setState({errorMessage:"error retreiving data"});
        })
}

    // callPrep = (e)=>{

    //     this.props.callPrep();

    //     console.log(343);

    // }
    render(){

        const {posts, errorMessage}=this.state

         console.log("here are ", posts);
        return(
            // <div>
                // <h1 className="ui centered thanks-msg">Team has been registerd successfully. </h1>

                <div>
                    <h1>Potentials  sponsors</h1>
                    {

this.state.loading? <div class="ui segment">
<p></p>
<div class="ui active dimmer">
  <div class="ui huge text loader">Loading</div>
</div>
<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

</div>:null
}


                    <table class="ui single line table">
          
          <thead>
            <tr>
              <th>Sponsors Name</th>
              <th>City</th>
              <th>phone</th>
           
            </tr>
          </thead>
          <tbody>
         
                {
            
                 posts.length?posts.map(post=> <tr>
                     
                    <td>{post.business_name}</td>
                    <td>{post.city}</td>
                    <td>{post.phone}</td>
                    </tr>
                 ):
                null
                }
                {
                        errorMessage?<div><h2>{ errorMessage}</h2></div>:null
                }
                 
                 </tbody>
              </table>


{/* </div> */}

                </div>


               
            
        )
    }
}

export default Success;
