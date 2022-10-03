import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  formSubmitHandler = () => {
    console.log('Submit');
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.formSubmitHandler} />;
      </Container>
    );
  }
}
