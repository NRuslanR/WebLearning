const React = require('react');

class TodoItemRow extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return  <tr>
                    <td>{this.props.todoItem.name}</td>
                    <td>{this.props.todoItem.priority}</td>
                    <td>
                        <input 
                            type="checkbox" 
                            readOnly 
                            checked={this.props.todoItem.isCompleted} 
                        />
                    </td>
                </tr>
    }
}

module.exports = TodoItemRow;