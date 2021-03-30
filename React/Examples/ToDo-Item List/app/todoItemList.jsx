const React = require('react'),
      TodoItemRow = require('./todoItemRow.jsx');

class TodoItemList extends React.Component
{
    render()
    {
        return  <table>
                    <thead>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>Priority</b></td>
                            <td><b>Completed ?</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.todoItems.map(todoItem => {
                                return  <TodoItemRow todoItem={todoItem} key={todoItem.id}/>
                            })
                        }
                    </tbody>
                    <tfoot>
                        Count: {this.props.todoItems.length}
                    </tfoot>
                </table>

    }
}

module.exports = TodoItemList;