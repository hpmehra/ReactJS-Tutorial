import React, { Component } from 'react';
import ProjectItems from './ProjectItems'
class Projects extends  Component {
    
    deleteProject(Id){
        this.props.onDelete(Id);
    }
    
    render() {
        
        let projectItems;
        if(this.props.projects)
        {
            projectItems=this.props.projects.map(p=>{
                return(
                <ProjectItems onDelete={this.deleteProject.bind(this)} key={p.Id} project={p} />
                )
            })
        }

        return (
          <div className="Projects">
            {projectItems}
          </div>
      );
    }
}

Projects.propTypes={
    onDelete:React.PropTypes.func,
    projects:React.PropTypes.array
}
export default Projects;
