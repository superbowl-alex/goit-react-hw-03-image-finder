import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ loadMore, isSubmitting }) => {
  return (
    <ButtonLoadMore type="button" onClick={loadMore} disabled={isSubmitting}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default Button;
