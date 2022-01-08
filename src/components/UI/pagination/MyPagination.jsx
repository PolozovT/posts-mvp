import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const MyPagination = ({ totalPages, page, changePage }) => {

  const pagesArray = usePagination(totalPages);

  return (
    <div className='page__wrapper'>
      {pagesArray.map(x => (
        <span
          onClick={() => changePage(x)}
          key={x}
          className={page === x ? 'page page__current' : 'page'}
        >
          {x}
        </span>
      ))}
    </div>
  )
}

export default MyPagination;