import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GallerryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <GalleryItem>
        <GallerryItemImage
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && <Modal image={item} toggleModal={this.toggleModal} />}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
