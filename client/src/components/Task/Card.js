import React, { useState } from "react";
import "./card.css";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Form from "./Form";
import PhotoUrl from "./PhotoUrl";
import AddUsers from "./AddUsers";

const Card = (props) => {
  const [edit, setEdit] = useState("");
  // console.log(props.task);
  if (props.children === edit) {
    return (
      <div className="card_edit">
        <div className="card_edit_close">
          <MdClose onClick={() => setEdit("")} />
        </div>
        <Form edit={edit} />
      </div>
    );
  }
  return (
    <div className="card-container">
      <div className="card__option">
        <BsThreeDots onClick={() => setEdit(`${props.children}`)} />
      </div>
      <div className="card">
        <div className="card_header">
          <div className="card__description">{props.children}</div>
        </div>
        <div className="card__footer">
          <ul className="list_container">
            {props.state.users_to_tasks.map((assignment) => {
              let test = [];
              if (assignment.task_id === props.task.id) {
                // console.log("TRUE FALSE", assignment.task_id === props.task.id);
                assignment.assigned_users.map((assigned_user) => {
                  // console.log("RETURN", assigned_user);
                  test.push(props.state.users[assigned_user].photo_url);
                  // console.log(props.state.users[assigned_user].photo_url);
                });
                return <PhotoUrl photolist={test} />;
                // return <div>hi</div>;
              }
            })}
          </ul>
          <AddUsers
            taskID={props.task.id}
            state={props.state}
            setState={props.setState}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
