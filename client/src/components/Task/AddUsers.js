import { useContext, useState } from "react";
import { TiUserAdd } from "react-icons/ti";

import { HiCheck } from "react-icons/hi";

import { AuthContext } from "../../context/AuthProvider";

const AddUsers = ({
  renderListContainer,
  taskID,
  state,
  setState,
  setUpdate,
  addUserToCard,
}) => {
  const { user } = useContext(AuthContext);
  const [add, setAdd] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckClick = (e) => {
    e.preventDefault();

    Promise.resolve(addUserToCard(user.id, taskID))
      .then(
        setTimeout(() => {
          setAdd(false);
          setUpdate((prev) => !prev);
          renderListContainer();
          console.log("DONE");
        }, 50)
      )

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
  if (state.users_to_tasks[taskID - 1])
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
        </>
      );
};
export default AddUsers;
