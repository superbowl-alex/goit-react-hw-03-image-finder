import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GallerryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item }) => {
  return (
    <GalleryItem className="gallery-item">
      <GallerryItemImage src={item.webformatURL} alt="" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
