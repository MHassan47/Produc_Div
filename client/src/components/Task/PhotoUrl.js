const PhotoUrl = (props) => {
  let photoMap = props.photoList.map((photo) => {
    //maps through list of photos to be rendered per card/task
    return (
      <li className="list_photo">
        <img className="card__owner" src={photo} />
      </li>
    );
  });
  return photoMap;
};

export default PhotoUrl;
