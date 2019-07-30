import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProject} from '../actions/projectActions';


 class Dashboard extends Component {
     componentWillMount(){
         this.props.getProject();
     }
    render() {
        const { projects } = this.props.project;
        return (
            <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <CreateProjectButton/>
                    <br />
                    <hr />
                    {projects.map(project => (
                        <ProjectItem key={project.id} project={project} />
                      ))}
                </div>
            </div>
        </div>
    </div>
        )
    }
}

Dashboard.propTypes={
    getProject:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
  };

  const mapStateToProps=(state)=>({
    project:state.project
  });
  
  export default connect(mapStateToProps,{getProject})(Dashboard);