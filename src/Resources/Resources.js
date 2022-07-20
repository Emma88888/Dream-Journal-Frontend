import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

const resources = [
  {
    title: "About Sleep Hygiene",
    href: "https://www.sleepfoundation.org/sleep-hygiene",
    description: "test"
  },
  {
    title: "Sleep and Mental Health",
    href: "https://www.sleepfoundation.org/mental-health",
    description: "test"
  },
  {
    title: "Benefits and Tips for Dream Journaling",
    href: "https://www.wellandgood.com/dream-journal/",
    description: "test"
  },
  {
    title: "Find Sleep Centers Near You",
    href: "https://sleepeducation.org/sleep-center/",
    description: "test"
  },
  {
    title: "About Dreams and Nightmares",
    href: "https://www.medicalnewstoday.com/articles/297625#bad-dreams-and-nightmares",
    description: "test"
  },
  {
    title: "Sleep Hygiene Checklist",
    href: "https://www.medicalnewstoday.com/articles/sleep-hygiene#poor-sleep-hygiene",
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
          {/* <Link to={resource.href}> */}
          <a href={resource.href}>
          <div>
            {resource.title}
          </div>
          <p>
            {resource.description}
          </p>
          {/* </Link> */}
          </a>
          </div>
        </div>)
      }
      </div>
    </div>
  );
};

export default Resources;
