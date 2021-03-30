const React = require('react'),
      TodoItemList = require('./todoItemList.jsx'),
      Search = require('./search.jsx');

class FilterableTodoItemList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            filteredTodoItems: this.props.todoItems
        };

        this.searchTodoItemName = "",
        this.showInCompletedTodoItems = false;

        this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
        this.handleInCompletedTodoItemsChanged = this.handleInCompletedTodoItemsChanged.bind(this);
    }

    handleSearchInputChanged(inputTodoItemName)
    {
        this.searchTodoItemName = inputTodoItemName;

        this.updateFilteredTodoItems();
    }

    handleInCompletedTodoItemsChanged(InCompletedTodoItemsSelected)
    {
        this.showInCompletedTodoItems = InCompletedTodoItemsSelected;

        this.updateFilteredTodoItems();
    }

    updateFilteredTodoItems()
    {
        this.setState(
            {
                filteredTodoItems: 
                    this.filterTodoItemsBy(
                        this.props.todoItems,
                        this.searchTodoItemName,
                        this.showInCompletedTodoItems
                    )
            }
        )
    }

    filterTodoItemsBy(todoItems, searchTodoItemName, showInCompletedTodoItems)
    {
        return todoItems.filter(
            todoItem => (!searchTodoItemName || todoItem.name.includes(searchTodoItemName)) && 
                        (!showInCompletedTodoItems || 
                        (todoItem.isCompleted === showInCompletedTodoItems))
        );
    }

    render()
    {
        return  <div>
                    <Search 
                        onSearchInputChanged={this.handleSearchInputChanged} 
                        onInCompletedTodoItemsChanged={this.handleInCompletedTodoItemsChanged}
                    />
                    <TodoItemList todoItems={this.state.filteredTodoItems}/>
                </div>
    }
}

module.exports = FilterableTodoItemList;