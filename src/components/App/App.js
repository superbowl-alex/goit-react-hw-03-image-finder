import React, { Component } from 'react';
import fetchImagesWithQuery from '../../Services/fetchImages';
import Searchbar from '../Searchbar';
import Button from '../Button';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    loading: false,
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState({
      page: 1,
      query: data.search,
      items: [],
      loading: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImagesWithQuery(
          this.state.query,
          this.state.page
        );
        console.log(images);
        this.setState(({ items }) => ({
          items: [...items, ...images],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.formSubmitHandler} />;
        {this.state.loading && <h2>Loading...</h2>}
        <Button loadMore={this.loadMore} />{' '}
      </Container>
    );
  }
}
