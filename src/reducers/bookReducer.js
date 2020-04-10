import uuid from 'uuid/v1';
import { BOOK } from "../constants";

export const bookReducer =(state, action) =>{
  switch (action.type) {
    case BOOK.ADD:
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid()
      }]
    case BOOK.REMOVE:
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}