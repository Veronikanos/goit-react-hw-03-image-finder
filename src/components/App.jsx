import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import styles from './App.module.css';
import { Component } from 'react';
import { fetchGallery } from './service/api';

export class App extends Component {
  state = {
    query: '',
    results: [],
    error: null,
    page: 1,
    modalImg: null,
    isLoading: false,
  };

  // componentDidMount() {

  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.onFetchImage();
    }
  }

  onFetchImage = async () => {
    this.setState({ isLoading: true });

    try {
      const result = await fetchGallery(this.state.query, this.state.page);
      this.setState(prevState => ({
        results: [...prevState.results, ...result],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmitSearch = newQuery => {
    this.setState({ query: newQuery, page: 1, results: [] });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getLargeImageURL = url => {
    this.setState({ modalImg: url });
  };

  closeModal = () => {
    console.log('hello');
    this.setState({ modalImg: null });
  };

  render() {
    const { isLoading, results, modalImg } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmitSearch} />
        {isLoading && <Loader />}

        {results.length > 0 ? (
          <ImageGallery result={results} getUrl={this.getLargeImageURL} />
        ) : (
          <h1>NO RES</h1>
        )}
        {results.length >= 12 && <Button onClick={this.onLoadMoreClick} />}

        {modalImg && <Modal largeImg={modalImg} onClose={this.closeModal} />}
      </div>
    );
  }
}
