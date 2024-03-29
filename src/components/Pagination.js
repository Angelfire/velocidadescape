import * as React from "react"
import { Link } from "gatsby"

const Pagination = ({ currentPage, limit, numPages, numPosts }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : currentPage - 1
  const nextPage = currentPage + 1

  return (
    <ul className="flex justify-between md:justify-start">
      {!isFirst && (
        <li className="mr-4">
          <Link
            className="bg-blue p-3 text-white"
            to={`/${prevPage}`}
            rel="prev"
          >
            ← Previous Page
          </Link>
        </li>
      )}
      {numPosts > limit &&
        Array.from({ length: numPages }, (_, i) => (
          <li
            className="mr-4 hidden md:block"
            key={`pagination-number${i + 1}`}
          >
            <Link
              className="bg-blue p-3 text-white"
              activeClassName="opacity-50"
              to={`/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      {!isLast && (
        <li>
          <Link
            className="bg-blue p-3 text-white"
            to={`/${nextPage}`}
            rel="next"
          >
            Next Page →
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Pagination
