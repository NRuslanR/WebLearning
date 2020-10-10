import React from 'react'
import { Container } from 'flux/utils'
import BookStore from '../data/BookStore.js'
import AppView from '../views/AppView.js'
import Actions from '../data/Actions.js'

class AppContainer extends React.Component
{
  static getStores()
  {
    return [BookStore];
  }

  static calculateState(prevState)
  {
    return {

      books: BookStore.getState(),
      onAddBook: Actions.addBook,
      onRemoveBook: Actions.removeBook

    }
  }

  render()
  {
    return <AppView
              books={ this.state.books }
              onAddBook={ this.state.onAddBook }
              onRemoveBook = { this.state.onRemoveBook }
           />
  }
}

export default Container.create(AppContainer);
