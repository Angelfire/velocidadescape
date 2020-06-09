import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numPages  }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '' : currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <ul className="pagination">
      {!isFirst && (
        <Link to={`/${prevPage}`} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li className="pagination__item" key={`pagination-number${i + 1}`}>
          <Link to={`/${i === 0 ? '' : i + 1}`}>
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={`/${nextPage}`} rel="next">
          Next Page →
        </Link>
      )}
    </ul>
  );
};

export default Pagination;