import React, { Component } from 'react';
import uuid from 'uuid'
import $ from 'jquery'
import AddProject from './Components/AddProject'
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            Projects:[],
            todos:[]
        }
    }

    getToDos(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/todos',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({todos:data},function(){
                    console.log(this.state);
                });
        }.bind(this),
        error:function(xhr,status, err){
            console.log(err);
        }
        })
    }
    getProjects(){
        this.setState({
            Projects:[{
                Id:uuid.v4(),
                title:'Business',
                category:'Web'
            },
            {
                Id:uuid.v4(),
                title:'Social',
                category:'Mobile'
            },
            {
                Id:uuid.v4(),
                title:'E-com',
                category:'web dev'
            }]}
            );
    }
    componentWillMount(){
        
        this.getProjects();
        this.getToDos();
    }

    componentDidMound(){
        this.getToDos();
    }

    
    addProjectHandler(project){
        let projects=this.state.Projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    deleteProjectHandler(Id){
        let projects=this.state.Projects;
        var index=projects.findIndex(x=>x.Id===Id);
        projects.splice(index,1);
        this.setState({projects:projects});
    }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.addProjectHandler.bind(this)} />
        <Projects onDelete={this.deleteProjectHandler.bind(this)} projects={this.state.Projects} />
            <hr />
            <Todos todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
