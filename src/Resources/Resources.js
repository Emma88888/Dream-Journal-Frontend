import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

const resources = [
  {
    title: "resource 1",
    href: "#",
    description: "test"
  },
  {
    title: "resource 2",
    href: "#",
    description: "test"
  },
  {
    title: "resource 3",
    href: "#",
    description: "test"
  },
  {
    title: "resource 4",
    href: "#",
    description: "test"
  },
  {
    title: "resource 5",
    href: "#",
    description: "test"
  }
]

const Resources = () => {
  return (
    <div className="rsrc-div">
      <h1 className="rsrc-title">Resources</h1>
      <div className="resources-container">
      {
        resources.map(resource => <div key={resource.title} className="resources">
          <div className="card">
          <Link to={resource.href}>
          <div>
            {resource.title}
          </div>
          <p>
            {resource.description}
          </p>
          </Link>
          </div>
        </div>)
      }
      </div>
    </div>
  );
};

export default Resources;
