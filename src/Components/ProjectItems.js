import React, { Component } from 'react';

class ProjectItems extends Component {

    deleteProject(Id){
        this.props.onDelete(Id);
    }
    render() {
        return (
          <div className="ProjectItems">
        <li>{this.props.project.title} - {this.props.project.category} ({this.props.project.Id})</li> <a href="#" onClick={this.deleteProject.bind(this,this.props.project.Id)}>Delete</a>
        </div>
      );
    }
}

ProjectItems.propTypes={
    onDelete:React.PropTypes.func,
    project:React.PropTypes.object
}

export default ProjectItems;
