import React, { useEffect, useState } from "react";
import "./card.css";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Form from "./Form";
import PhotoUrl from "./PhotoUrl";
import AddUsers from "./AddUsers";
import axios from "axios";

const Card = (props) => {
  const [photoListContainer, setPhotoListContainer] = useState([]);
  const [edit, setEdit] = useState("");
  const [value, setValue] = useState(props.children);

  const handleEditClick = (e) => {
    console.log(props.task.id);
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/tasks/edit/${props.task.id}`, value, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        props.setState({
          ...props.state,
          tasks: [...props.state.tasks, response.data],
        });
      })
      .then(() => setEdit(false))
      .catch((error) => console.log(error));
  };

  // const filteredAssignments = props.state.users_to_tasks.filter((assignment) => assignment.task_id === props.task.id )
  // const assignedUsers = filteredAssignments.map((assignment) => {

  // })
  // {

  //     // console.log("TRUE FALSE", assignment.task_id === props.task.id);
  //     assignment.assigned_users.map((assigned_user) => {
  //       // console.log("RETURN", assigned_user);
  //       test.push(props.state.users[assigned_user].photo_url);
  //       // console.log(props.state.users[assigned_user].photo_url);
  //     });
  //     return <PhotoUrl photolist={test} />;
  //     // return <div>hi</div>;
  //   }
  // });

  const renderListContainer = () => {
    const renderedListContainer =
      props.state.users_to_tasks &&
      props.state.users_to_tasks.map((assignment) => {
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
      });
    setPhotoListContainer(renderedListContainer);
  };

  // useEffect(() => console.log("hi"), [photoListContainer]);

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
            setState={props.setState}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
