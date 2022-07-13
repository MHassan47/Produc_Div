import React, { useState } from "react";
import "./card.css";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Form from "./Form";

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
  console.log(props.state.users[props.task.owner_id]);
  return (
    <div className="card-container">
      <div className="card__option">
        <BsThreeDots onClick={() => setEdit(`${props.children}`)} />
      </div>
      <div className="card">
        <div className="card__description">{props.children}</div>
        <div className="card__footer">
          <img
            className="card__owner"
            src={
              props.state.users[props.task.owner_id]
                ? props.state.users[props.task.owner_id].photo_url
                : ""
            }
          />

          {/* {props.state.users.map((user) => {
            if (user.id === props.task.owner_id)
              return <div>{user.photo_url}</div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
