import { useState } from "react";

function PostProject() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const newProject = {
    title: title,
    description: description,
    budget: budget,
    deadline: deadline,
    skills: skills
  };

  setProjects([...projects, newProject]);

  setTitle("");
  setDescription("");
  setBudget("");
  setDeadline("");
  setSkills("");
};

  return (
    <div className="post-project">

      <h1>Post a Project</h1>

      <p>
        Tell students what you need help with.
      </p>

      <form onSubmit={handleSubmit}>

        <label>Project Title</label>
        <input
          type="text"
          placeholder="Example: Build a React Portfolio"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Project Description</label>
        <textarea
          placeholder="Describe your project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Budget</label>
        <input
          type="number"
          placeholder="Example: 2000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <label>Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <label>Required Skills</label>
        <input
          type="text"
          placeholder="Example: React, JavaScript, CSS"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button type="submit">
          Post Project
        </button>

      </form>

      <div className="posted-projects">

  <h2>Posted Projects</h2>

  {projects.map((project, index) => (
    <div className="project-card" key={index}>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p>
        Budget: ₹{project.budget}
      </p>

      <p>
        Deadline: {project.deadline}
      </p>

      <p>
        Skills: {project.skills}
      </p>

    </div>
  ))}

</div>

    </div>
  );
}

export default PostProject;