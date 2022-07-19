import { useState } from "react";

function DropDown({ currentProject, setCurrentProject }) {
  // const [selectedProject, setSelectedProject] = useState(currentProject);

  const handleChange = (e) => {
    setCurrentProject(Number(e.target.value));
  };
  console.log({ currentProject });

  return (
    <select className="" value={currentProject} onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">New Project</option>
    </select>
  );
}

export default DropDown;
