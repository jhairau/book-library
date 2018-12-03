import { reducer, initialState } from './book.reducer';
import {AddBook} from '../actions/book.actions';
import {Book} from '../../book';

describe('Book Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('add action', () => {
    it('should return state with added book', () => {
      const book: Book = {
        id: 'abc123',
        title: 'TITLE',
        category: 'CATEGORY',
        description: 'DESCRIPTION'
      };

      const action = new AddBook(book);

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ids: [book.id],
        entities: {
          [book.id]: book
        }
      });
    });
  });
});


