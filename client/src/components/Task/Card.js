import "./card.css";
import { BsThreeDots } from "react-icons/bs";

const Card = (props) => {
  // console.log(props.task);
  return (
    <div className="card-container">
      <div className="card__option">
        <BsThreeDots onClick={() => console.log(props.children)} />
      </div>
      <div className="card">
        <div className="card__description">{props.children}</div>
        <div className="card__footer">
          <img
            className="card__owner"
            src={props.state.users[props.task.owner_id].photo_url}
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
