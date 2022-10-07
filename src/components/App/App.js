import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OnlyScroll from 'only-scrollbar';
import GlobalStyles from 'GlobalStyles';
import {
  fetchImagesWithQuery,
  HITS_PER_PAGE,
} from '../../Services/fetchImages';
import Searchbar from '../Searchbar';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import { Container } from './App.styled';

// Creating an instance of a class OnlyScroll (adds inertia for increased smoothness)
new OnlyScroll(document.scrollingElement, {
  damping: 0.8,
});

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    error: false,
    endOfCollection: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    const { page: prevPage, query: prevQuery } = prevState;
    if (prevPage !== page || prevQuery !== query) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchImagesWithQuery(query, page);
        const images = response.hits;
        this.validationData(images);
        const totalPages = Math.ceil(response.totalHits / HITS_PER_PAGE);
        this.checkEndCollection(page, totalPages);
        this.setState(({ items }) => ({
          items: [...items, ...images],
        }));
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  formSubmitHandler = data => {
    this.setState({
      page: 1,
      query: data.search.trim(),
      items: [],
      isLoading: false,
      error: false,
      endOfCollection: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

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

  checkEndCollection = (currentPage, total) => {
    if (currentPage === total) {
      this.setState({ endOfCollection: true });
      toast.info("We're sorry, but you've reached the end of search results.", {
        theme: 'colored',
      });
    }
  };

  render() {
    const { items, isLoading, error, endOfCollection } = this.state;

    return (
      <Container>
        <GlobalStyles />
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery items={items} />
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {items.length > 0 && !endOfCollection && (
          <Button loadMore={this.loadMore} isSubmitting={isLoading} />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
