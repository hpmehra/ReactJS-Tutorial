import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends  Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }

    static defaultProps={
        categories:['Web','Mobile','web dev']
    }

    saveProject(e)
    {
        if(this.refs.title.value!==''){
            this.setState({
                newProject:{
                    Id:uuid.v4(),
                    title:this.refs.title.value,
                    category:this.refs.category.value
                }
            },function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions =this.props.categories.map(c=>{
            return <option key={c} value={c}>{c}</option>
        });

        return (
          <div>
            <h3>Add Project</h3>
            <form onSubmit={this.saveProject.bind(this)}>
                <div>
                    <lable>Title</lable><br/>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <lable>Category</lable><br/>
                    <select ref="category">
                        {categoryOptions}              
                    </select>
                </div>

                <br />
                <input type="submit" value="Save" />
            </form>
          </div>
      );
    }
}

AddProject.propTypes={
    addProject:React.PropTypes.func,
    categories:React.PropTypes.array
}

export default AddProject;