import "./projects.scss"
import { Project } from "../components/project/project"

export const Projects = () => {
  return (
    <div>
    <div className="header">
      <div className="title">
        projects
      </div>
      <div className="description">
        here are some of the few projects i've been working 
        on recently. feel free to reach out anytime if you 
        are curious about them or if you wanna collab on a 
        project!
      </div>
    </div>
    <div className="projects">
      <div className="project-container">
        <Project />
      </div>
    </div>
    </div>
  )
}