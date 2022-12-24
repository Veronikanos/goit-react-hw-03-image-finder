import styles from './Searchbar.module.css';
import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
