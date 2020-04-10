import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { BOOK } from "../constants";



const BookDetails = ({book}) => {
  const { dispatch } = useContext(BookContext);

  return(
    <li onClick={() => dispatch({type: BOOK.REMOVE, id: book.id })}>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
    </li>
  )
}

export default BookDetails
