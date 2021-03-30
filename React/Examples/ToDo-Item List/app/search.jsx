const React = require('react');

class Search extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
        this.handleInCompletedToDoItemsCheckBoxChanged = this.handleInCompletedToDoItemsCheckBoxChanged.bind(this);
    }

    handleSearchInputChanged(e)
    {
        this.props.onSearchInputChanged(e.target.value);
    }

    handleInCompletedToDoItemsCheckBoxChanged(e)
    {
        this.props.onInCompletedTodoItemsChanged(e.target.checked);
    }

    render()
    {
        return  <div>
                    <input 
                        type="text" 
                        placeholder="Search..."
                        onChange={this.handleSearchInputChanged}
                    />
                    <p>
                        <input 
                            type="checkbox" 
                            onChange={this.handleInCompletedToDoItemsCheckBoxChanged}
                        />
                        &nbsp;
                        <span>Only incompleted todo-items</span>
                    </p>
                </div>
    }
}

module.exports = Search;