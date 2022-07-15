import { useContext, useEffect, useState } from "react";
import { TiUserAdd } from "react-icons/ti";

import { HiCheck } from "react-icons/hi";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import PhotoUrl from "./PhotoUrl";

const AddUsers = ({ renderListContainer, taskID, state, setState }) => {
  const context = useContext(AuthContext);
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState(false);
  const [test, setTest] = useState(false);
  const { user } = context;

  // useEffect(() =>

  const handleCheckClick = (e) => {
    e.preventDefault();
    console.log(taskID);

    axios
      .post(
        `http://localhost:8080/api/tasks/users_to_tasks/${user.id}/${taskID}`
      )

      .then((response) => {
        console.log("===============", response);
        setState({
          ...state,
          users_to_tasks: [...state.users_to_tasks, response.data],
        }); //get list of users from new users setPhotoListContainer(newListOfUsers)
      })
      .then(() => setAdd(false))
      .then(() => setTest(true))
      // .then(() => window.location.reload(false))
      //   .then(() =>setChecked(true))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("hi");
    renderListContainer();
  }, [test]);
  const handleAddClick = (e) => {
    e.preventDefault();
    setAdd((prev) => !prev);
    setTimeout(() => {
      console.log("TIMEOUT");
      setAdd(false);
    }, 5000);
  };
  if (!state.users_to_tasks[taskID - 1]) {
    console.log(state.users_to_tasks, taskID);
  }
  // console.log({ test: state.users_to_tasks[taskID] });
  if (!state.users_to_tasks[taskID - 1].assigned_users.includes(user.id))
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
