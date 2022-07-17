import { useContext, useEffect, useState } from "react";
import { TiUserAdd } from "react-icons/ti";

import { HiCheck } from "react-icons/hi";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import PhotoUrl from "./PhotoUrl";

const AddUsers = ({
  renderListContainer,
  taskID,
  state,
  setState,
  setTest,
  addUserToCard,
}) => {
  const { user } = useContext(AuthContext);
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [test, setTest] = useState(false);

  // useEffect(() =>

  const handleCheckClick = (e) => {
    e.preventDefault();

    // if (!state.users_to_tasks[taskID - 1].assigned_users.includes(user.id))

    Promise.resolve(addUserToCard(user.id, taskID))
      .then(() =>
        setTimeout(() => {
          setAdd(false);
          setTest((prev) => !prev);
          renderListContainer();
          console.log("DONE");
        }, 5000)
      )
      // .then(setAdd(false), setTest(true), renderListContainer())
      .catch((error) => console.log(error));

    // .then((response) => {
    //   console.log("===============", response);
    //   setState({
    //     ...state,
    //     users_to_tasks: [...state.users_to_tasks, response.data],
    //   }) //get list of users from new users setPhotoListContainer(newListOfUsers)
    //     .then(() => setAdd(false), setTest(true), renderListContainer());
    // })
  };
  // useEffect(() => {
  // }, [state]);
  // useEffect(() => {
  //   console.log("RAN");
  //   renderListContainer();
  // }, [test]);

  const handleAddClick = (e) => {
    e.preventDefault();
    setAdd((prev) => !prev);
    setTimeout(() => {
      console.log("TIMEOUT");
      setAdd(false);
    }, 5000);
  };

  // if (!state.users_to_tasks[taskID - 1].assigned_users.includes(user.id))
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
    </>
  );
};
export default AddUsers;
