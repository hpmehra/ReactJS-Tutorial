import React, { Component } from 'react';

class TodoItems extends Component {

    render() {
        return (
          <div className="TodoItems">
        <li>{this.props.todo.title}</li>
        </div>
      );
    }
}

TodoItems.propTypes={
    todo:React.PropTypes.object
}

export default TodoItems;
