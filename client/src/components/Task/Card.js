import React, { useContext, useEffect, useState } from "react";
import "./card.css";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Form from "./Form";
import PhotoUrl from "./PhotoUrl";
import AddUsers from "./AddUsers";

const Card = (props) => {
  const [photoListContainer, setPhotoListContainer] = useState([]);
  const [edit, setEdit] = useState("");
  const [value, setValue] = useState(props.children);
  const [update, setUpdate] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    Promise.resolve(props.updateCard(value, props.task.id))
      .then(() => setEdit(false))
      .catch((error) => console.log(error));
  };

  const renderListContainer = () => {
    const renderedListContainer =
      props.state.users_to_tasks &&
      props.state.users_to_tasks.map((assignment) => {
        let photoList = [];
        if (assignment.task_id === props.task.id) {
          assignment.assigned_users.map((assigned_user) => {
            photoList.push(props.state.users[assigned_user].photo_url);
          });
          return <PhotoUrl photoList={photoList} />;
        }
      });
    setPhotoListContainer(renderedListContainer);
  };

  useEffect(() => renderListContainer(), [update]);

  return (
    <div className="card-container">
      <div className="card__option">
        {edit ? (
          <MdClose onClick={() => setEdit(false)} />
        ) : (
          <BsThreeDots onClick={() => setEdit(true)} />
        )}
      </div>
      <div className="card">
        <div className="card_header">
          {edit ? (
            <div className="card_description_edit">
              <form onSubmit={console.log()}>
                <input
                  type="text"
                  id="edit_description"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
              <div className="card_description_edit_submit">
                <HiCheck onClick={handleEditClick} />
              </div>
            </div>
          ) : (
            <div className="card__description">{props.children}</div>
          )}
        </div>
        <div className="card__footer">
          <ul className="list_container">{photoListContainer}</ul>
          <AddUsers
            renderListContainer={renderListContainer}
            taskID={props.task.id}
            state={props.state}
            setUpdate={setUpdate}
            addUserToCard={props.addUserToCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
