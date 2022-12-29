import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  // state = {
  //   isOpen: false,
  // };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleClickOnBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleClickOnBackdrop);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };

  handleClickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      console.log('В бекдроп');
      // return this.props.onClose();
    } else {
      console.log('MIMO');
    }
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={this.props.largeImg} alt="modal" />
        </div>
      </div>
    );
  }
}
