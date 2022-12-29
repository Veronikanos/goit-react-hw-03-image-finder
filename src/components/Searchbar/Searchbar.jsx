import styles from './Searchbar.module.css';
import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      alert('Enter query!');
      this.props.handleNoResults();
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.searchFormButton}>
            <ImSearch />
          </button>
        </form>
      </header>
    );
  }
}
