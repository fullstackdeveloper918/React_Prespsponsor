import React from 'react';

import Persons from './persons';

import Hello from './Practice/Hello'
import Form from './Practice/Form'
import Parent from './Practice/Parent'
import Ref from './Practice/Ref'
import Rendering from './Practice/Rendering'
import AntiPattern from './Practice/AntiPattern'
import Stylesheet from './Practice/Stylesheet'
import Inline from './Practice/Inline'
import Form1 from './Practice/Form1'
import Form3 from './Practice/Form3'

// import FormCompo from './Practice/FormCompo'



import One from './Practice/One'
import FragmentDemo from './Practice/FragmentDemo';

import ClickComponent from './Practice/ClickComponent';

import HoverComponent from './Practice/HoverComponent';

import Form2 from './Practice/Form2';
import Form4 from './Practice/form4';

import One1 from './Practice/One1';
import Increase from './Practice/Increase';

import NewPractice from './Practice/NewPractice';
import Header from './Practice/Layouts/Header';

import Footer from './Practice/Layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './Practice/Home';
import {About} from './Practice/About';

import {Contact} from './Practice/Contact';

import {NoMatch} from './Practice/NoMatch';

import {Layouts} from './Practice/Layouts';
import {NavigationBar} from './Practice/NavigationBar';
import {Jumbotron} from './Practice/Jumbotron';

import MainForm from './semantic/MainForm';
import Edit from './semantic/edit.component';


import { Container } from 'semantic-ui-react';
// 
// import Store from './Practice/Store';
import  {Steps}  from './Steps/Steps'

import MultiStep from 'react-multistep'
import ApiCall from './Practice/ApiCall';
import CheckoutForm from './Practice/CheckoutForm';

import WizardForm from './WizardForm/WizardForm';

export default function App() {
  return (
      <div className="step-container"> 
       <Router>
       <Jumbotron />
       {/* <Edit /> */}
        {/* <Store /> */}
{/* 
<React.Fragment>
  <NavigationBar />
  <Jumbotron />
  <Layouts>
        <Router>
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route  component={NoMatch} />
          </Switch>
        </Router>
  </Layouts>
        </React.Fragment> */}
        {/* <Form3 /> */}
        {/* <Form3 />
        <ApiCall /> */}
{/* <Form3 /> */}
        {/* <WizardForm /> */}
        {/* <div className="step-form">
      <MultiStep steps={Steps} />
    </div> */}
{/* <ApiCall /> */}
        {/* <CheckoutForm /> */}
        {/* <ApiCall /> */}

        {/* <Form3 /> */}
        {/* <Form4 /> */}
        <Container >
        <MainForm />
       

      </Container> 
      <br /> <br /> <br />
      </Router>
      </div>
     
  );
}