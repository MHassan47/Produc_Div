import "./card.css";
import PhotoUrl from "./PhotoUrl";

const PhotoListItem = ({ list, state }) => {
  console.log(".............", state);
  const photoMap = list.map((photo) => {
    <PhotoUrl photo={photo} />;
  });
  return <ul>{photoMap}</ul>;
};

export default PhotoListItem;
