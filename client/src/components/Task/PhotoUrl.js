const PhotoUrl = (props) => {
  let photoMap = props.photoList.map((photo) => {
    return (
      <li className="list_photo">
        <img className="card__owner" src={photo} />
      </li>
    );
  });
  return photoMap;
};

export default PhotoUrl;
