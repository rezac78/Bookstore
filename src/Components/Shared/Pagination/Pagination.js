import React from "react";

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  if (totalBooks <= booksPerPage) return null;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center list-reset border border-grey-light rounded w-auto font-sans">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
              className="block py-2 px-3 leading-tight bg-white border border-grey-light hover:bg-grey-lighter"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
