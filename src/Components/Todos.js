import React, { Component } from 'react';
import TodoItems from './TodoItems'
class Todos extends Component {
    
    
    render() {
        
        let todoItems;
        if(this.props.todos)
        {
            todoItems=this.props.todos.map(p=>{
                return(
                <TodoItems key={p.id} todo={p} />
                )
                })
}

        return (
          <div className="Todos">
                {todoItems}
          </div>
      );
        }
}

Todos.propTypes={
    todos:React.PropTypes.array
}
export default Todos;
