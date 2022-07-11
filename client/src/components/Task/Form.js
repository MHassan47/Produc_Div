import axios from "axios";
import { useState } from "react";

const Form = ({ state, setState }) => {
  //   const state = props.state;
  //   const setState = props.setState;
  const project = 1;
  const column = "In Progress";
  const [user_id, setUser_id] = useState(1);
  const [description, setDescription] = useState("");

  //   const [owner, setOwner] = useState(null);
  //   const [members, setMembers] = useState([]);

  const handleSubmit = (e) => {
    // console.log(state);
    // console.log(setState);
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/tasks/new/${project}`, {
        name: description,
        created_at: "2022/07/13",
        col: column,
        owner_id: user_id,
      })
      .then((response) => {
        setState({ ...state, tasks: [...state.tasks, response.data] });
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create__card">
      <header>Create Card</header>
      <form onSubmit={handleSubmit} className="card__form">
        <label>
          <p>Description</p>
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="card__form__footer">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
