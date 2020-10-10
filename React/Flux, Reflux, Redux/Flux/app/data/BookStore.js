import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import ActionTypes from './ActionTypes.js'
import BookDispatcher from './BookDispatcher.js'

class BookStore extends ReduceStore
{
  constructor()
  {
    super(BookDispatcher)
  }

  getInitialState()
  {
    return Immutable.List.of("Aristotle's MetaPhysics", "Platon's State");
  }

  reduce(state, action)
  {
    switch (action.type)
    {
      case ActionTypes.ADD_ITEM:
      {
        if (action.name.trim() !== '')
        {
          console.log(action.name);

          return state.push(action.name);
        }

        return state;
      }

      case ActionTypes.REMOVE_ITEM:
      {
        var itemIndex = state.indexOf(action.name);

        if (itemIndex > -1)
        {
          console.log(itemIndex);
          
          return state.delete(itemIndex);
        }

        return state;
      }

      default:
      {
        console.log('BookStore default');

        return state;
      }
    }
  }
}

export default new BookStore();
