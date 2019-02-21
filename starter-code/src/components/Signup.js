import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default class Signup extends Component {
  render() {
    return(
      <div className="Signup">
        <Navbar />
        <div className="columns is-centered" style={{ marginTop: '10px' }}>
          <div className="column is-half">
            <form action="">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <FormField label="Password" type="password" placeholder="Enter your password" />
              <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
              <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}