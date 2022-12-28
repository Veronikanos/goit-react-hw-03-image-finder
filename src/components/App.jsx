// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
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
    // isLoading: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.onFetchImage();
    }
  }

  onFetchImage = async () => {
    // this.setState({ isLoading: true });

    try {
      const result = await fetchGallery(this.state.query, this.state.page);
      this.setState(prevState => ({
        results: [...prevState.results, ...result],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
    // finally {
    //   console.log(this.results);
    // }
    // finally {
    //   this.setState({ isLoading: false });
    // }
  };

  onSubmitSearch = newQuery => {
    this.setState({ query: newQuery, page: 1, results: [] });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmitSearch} />
        {this.state.results.length > 0 && (
          <ImageGallery result={this.state.results} />
        )}
        {/* <Loader /> */}
        {this.state.results.length >= 12 && (
          <Button onClick={this.onLoadMoreClick} />
        )}

        {/* <Modal /> */}
      </div>
    );
  }
}
