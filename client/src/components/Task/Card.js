import "./card.css";
import { BsThreeDots } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        {props.children}
        <div className="card__option">
          <BsThreeDots onClick={() => console.log(props.children)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
