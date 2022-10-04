import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ search: '' }} onSubmit={onSubmit}>
      <SearchHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <FcSearch size={28} />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
