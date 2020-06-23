import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, limit, numPages, numPosts  }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '' : currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <ul className="flex">
      {!isFirst && (
        <li className="mr-4">
          <Link className="bg-yellow p-3" to={`/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        </li>
      )}
      {numPosts > limit && Array.from({ length: numPages }, (_, i) => (
        <li className="mr-4" key={`pagination-number${i + 1}`}>
          <Link className="bg-yellow p-3" to={`/${i === 0 ? '' : i + 1}`}>
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <li>
          <Link className="bg-yellow p-3" to={`/${nextPage}`} rel="next">
            Next Page →
          </Link>
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  limit: PropTypes.number,
  numPages: PropTypes.number,
  numPosts: PropTypes.number,
};

export default Pagination;
