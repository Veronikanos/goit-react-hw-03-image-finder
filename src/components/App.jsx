// import { Button } from './Button/Button';

// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import styles from './App.module.css';
import { Component } from 'react';
import { GalleryApiService } from './service/api';

const galleryApiService = new GalleryApiService();

export class App extends Component {
  state = {
    query: '',
    results: [],
    error: null,
    // isLoading: false
  };

  componentDidUpdate(prevProps, prevState) {
    galleryApiService.searchQuery = this.state.query;

    if (prevState.query !== this.state.query) {
      this.onFetchImage();
    }
  }

  onFetchImage = async () => {
    // this.setState({ isLoading: true });

    try {
      const result = await galleryApiService.fetchGallery();
      this.setState({ results: result });
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
    this.setState({ query: newQuery });
  };

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmitSearch} />
        {this.state.results.length > 0 && (
          <ImageGallery result={this.state.results} />
        )}
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}
