import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  listItem: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Open Sans',
    margin: '2px 0',
  },
};

const BookListItem = ({ checkedOutBy, title }) => (
  <li className="list_item" style={styles.listItem}>
    {title}
  </li>
);

BookListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checkedOutBy: PropTypes.object,
};

export default BookListItem;
