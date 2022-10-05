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
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
  };
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <SearchHeader>
          <SearchForm>
            <SearchFormButton type="submit" disabled={isSubmitting}>
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
      )}
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
