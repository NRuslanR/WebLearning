import ActionTypes from './ActionTypes.js';
import BookDispatcher from './BookDispatcher.js';

const Actions = {

  addBook(name) {

    BookDispatcher.dispatch({

      type: ActionTypes.ADD_ITEM,
      name: name

    });

  },

  removeBook(name) {

    BookDispatcher.dispatch({

      type: ActionTypes.REMOVE_ITEM,
      name: name

    });

  }
}

export default Actions;
