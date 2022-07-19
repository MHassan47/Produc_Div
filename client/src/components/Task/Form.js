import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Form = ({ state, setState, currentColumn, newTask, currentProject }) => {
  const { user } = useContext(AuthContext);

  const column = currentColumn;

  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    console.log({ currentProject });
    if (!description) return setError(true);
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/tasks/new/${currentProject}`, {
        name: description,
        created_at: "2022/07/13",
        col: column,
        owner_id: user.id,
      })
      .then((response) => {
        axios
          .post(
            `http://localhost:8080/api/tasks/users_to_tasks/${user.id}/${response.data.id}`
          )
          .then((data) => {
            console.log("HERE");
            setState({
              ...state,
              tasks: [...state.tasks, response.data],
              user_to_tasks: [...state.users_to_tasks, data.data],
            });
          });
      })

      .then(() => newTask(currentColumn))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create__card">
      <header>Create Card</header>
      <form onSubmit={handleSubmit} className="card__form">
        <label>
          <p>Description</p>
          <p>{error ? <div>Include a description</div> : <></>} </p>
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="card__form__footer">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
