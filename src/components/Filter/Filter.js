import PropTypes from 'prop-types';
import React from 'react';
import s from './Filter.module.scss';

const Filter = ({ filter, filterHandler }) => {
  return (
    <div className={s.container}>
      <h3>Find contacts by name</h3>
      <input name="filter" value={filter} onChange={filterHandler} />
    </div>
  );
};

export default Filter;

Filter.protoTypes = {
  filter: PropTypes.string,
  filterHandler: PropTypes.func,
};
