const PhotoUrl = (props) => {
  // console.log("-----///////", props.photolist);
  let photoMap = props.photolist.map((photo) => {
    return (
      <li className="list_photo">
        <img
          className="card__owner"
          src={photo}
          //   {`https://i.imgur.com/3tVgsra.jpg`}
        />
      </li>
    );
  });
  return photoMap;
};

export default PhotoUrl;
