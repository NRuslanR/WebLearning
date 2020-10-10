import React from 'react'

class AppView extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {

      newBook: "",
      books: props.books

    };

    this.OnInputChanged = this.OnInputChanged.bind(this);
    this.onAddBookClicked = this.onAddBookClicked.bind(this);

  }

  OnInputChanged(e)
  {
    this.setState({ newBook: e.target.value });
  }

  onAddBookClicked(e)
  {
    this.props.onAddBook(this.state.newBook);
    this.setState({ newBook: "" });
  }

  render()
  {
      return <div>
                <div>
                    <label for="name">Book Name:</label>&nbsp;
                    <input onChange={ this.OnInputChanged } id="name" name="name" type="text" placeholder="Input a new Book name" value={ this.state.newBookName } />&nbsp;
                    <button onClick={ this.onAddBookClicked }>Add Book</button>
                </div>
                <div>
                  <h1>Book List:</h1>
                  <ul>
                      {
                        this.state.books.map(book => {

                          return <li>
                                    <BookView
                                      name={book}
                                      onRemove={this.props.onRemoveBook}
                                    />
                                 </li>

                        })
                      }
                  </ul>
                </div>
             </div>
  }
}

class BookView extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = { name: props.name };

    this.onRemoveClicked = this.onRemoveClicked.bind(this);
  }

  onRemoveClicked(e)
  {
    this.props.onRemove(this.state.name);
  }

  render()
  {
    return <div>
              <h3>{ this.state.name }</h3>&nbsp;
              <button onClick={ this.onRemoveClicked }>Remove</button>
           </div>
  }
}

export default AppView;
