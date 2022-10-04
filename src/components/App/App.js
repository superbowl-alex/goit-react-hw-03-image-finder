import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import fetchImagesWithQuery from '../../Services/fetchImages';
import Searchbar from '../Searchbar';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
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
      query: data.search.trim(),
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
    const { page, query } = this.state;
    const { page: prevPage, query: prevQuery } = prevState;
    if (prevPage !== page || prevQuery !== query) {
      this.setState({ loading: true });
      try {
        const images = await fetchImagesWithQuery(query, page);
        console.log(images);
        this.setState(({ items }) => ({
          items: [...items, ...images],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { loading, items } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {loading && <h2>Loading...</h2>}
        <ImageGallery items={items} />
        <Button loadMore={this.loadMore} />
        <ToastContainer />
      </Container>
    );
  }
}
