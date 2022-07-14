import { useContext, useEffect, useState } from "react";
import { TiUserAdd } from "react-icons/ti";

import { HiCheck } from "react-icons/hi";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import PhotoUrl from "./PhotoUrl";

const AddUsers = ({ taskID, state, setState }) => {
  const { user } = useContext(AuthContext);
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState(false);

  //   useEffect(() =>)
  const handleCheckClick = (e) => {
    e.preventDefault();
    console.log(state.users_to_tasks[taskID].assigned_users.includes(user.id));
    console.log(user.id);
    if (!state.users_to_tasks[taskID].assigned_users.includes(user.id))
      axios
        .post(
          `http://localhost:8080/api/tasks/users_to_tasks/${user.id}/${taskID}`
        )

        .then((response) =>
          setState({
            ...state,
            users_to_tasks: [...state.users_to_tasks, response.data],
          })
        )
        .then(() => setAdd(false))
        // .then(() => window.location.reload(false))
        //   .then(() =>setChecked(true))
        .catch((error) => console.log(error));
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setAdd((prev) => !prev);
    setTimeout(() => {
      console.log("TIMEOUT");
      setAdd(false);
    }, 5000);
  };
  return (
    <>
      {add && !checked && (
        <div className="card_add_members">
          <HiCheck
            onClick={handleCheckClick}
            className="card_add_members_icon"
          />
        </div>
      )}
      {!add && !checked && (
        <div className="card_add_members">
          <TiUserAdd
            onClick={handleAddClick}
            className="card_add_members_icon"
          />
        </div>
      )}
      {/* {add && checked && (
        <div className="card_add_members">
          <PhotoUrl
            onClick={handleAddClick}
            className="card_add_members_icon"
          />
        </div>)} */}
    </>
  );
};
export default AddUsers;
