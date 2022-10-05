import React from 'react';
import PropTypes from 'prop-types';
import { ErrorAllert } from './ErrorMessage.styled';

const ErrorMessage = ({ message }) => {
  return (
    <ErrorAllert>Something went wrong. Please, try again later</ErrorAllert>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
