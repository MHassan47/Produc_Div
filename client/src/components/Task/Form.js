import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Form = ({
  state,
  setState,
  currentColumn,
  newTask,
  //   setNewCardToDo,
  //   setNewCardInProgress,
  //   setNewCardComplete,
}) => {
  const { user } = useContext(AuthContext);
  //   const state = props.state;
  //   const setState = props.setState;
  const project = 1;
  const column = currentColumn;
  // const [user_id, setUser_id] = useState(1);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  //   const [owner, setOwner] = useState(null);
  //   const [members, setMembers] = useState([]);

  const handleSubmit = (e) => {
    if (!description) return setError(true);
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/tasks/new/${project}`, {
        name: description,
        created_at: "2022/07/13",
        col: column,
        owner_id: user.id,
      })
      .then((response) => {
        setState({ ...state, tasks: [...state.tasks, response.data] });
        console.log(response);
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
