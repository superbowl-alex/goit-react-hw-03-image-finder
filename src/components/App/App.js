import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchImagesWithQuery,
  HITS_PER_PAGE,
} from '../../Services/fetchImages';
import Searchbar from '../Searchbar';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import ErrorMessage from '../ErrorMessage';
import { Container, WrapSpinner } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    ISloading: false,
    error: false,
    endOfCollection: false,
  };

  formSubmitHandler = data => {
    this.setState({
      page: 1,
      query: data.search.trim(),
      items: [],
      ISloading: false,
      error: false,
      endOfCollection: false,
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
      this.setState({ ISloading: true });
      try {
        const response = await fetchImagesWithQuery(query, page);
        const images = response.hits;
        this.validationData(images);
        const totalPages = Math.ceil(response.totalHits / HITS_PER_PAGE);
        if (page === totalPages) {
          this.setState({ endOfCollection: true });
          toast.info(
            "We're sorry, but you've reached the end of search results.",
            {
              theme: 'colored',
            }
          );
        }
        this.setState(({ items }) => ({
          items: [...items, ...images],
        }));
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      } finally {
        this.setState({ ISloading: false });
      }
    }
  }

  validationData = data => {
    if (data.length === 0) {
      toast.warn(
        ' Sorry, there are no images matching your search query. Please try again.',
        {
          theme: 'colored',
        }
      );
    }
  };

  render() {
    const { items, ISloading, error, endOfCollection } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery items={items} />
        {error && <ErrorMessage />}
        {ISloading && (
          <WrapSpinner>
            <Audio color="#3f51b5" />
          </WrapSpinner>
        )}
        {items.length > 0 && !endOfCollection && (
          <Button loadMore={this.loadMore} />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
