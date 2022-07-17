const PhotoUrl = ({ photo }) => {
  return (
    <li className="list_photo">
      <img
        className="card__owner"
        src={photo}
        //   {`https://i.imgur.com/3tVgsra.jpg`}
      />
    </li>
  );
};

export default PhotoUrl;
