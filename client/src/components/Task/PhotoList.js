import PhotoListItem from "./PhotoListItem";
import "./card.css";
const PhotoList = ({ taskID, state, setState }) => {
  const renderedListContainer = state.users_to_tasks.map((assignment) => {
    // console.log(assignment);
    let photoList = [];

    if (assignment.task_id === taskID) {
      assignment.assigned_users.map((assigned_user) => {
        photoList.push(state.users[assigned_user].photo_url);
        // console.log("----------------------------------", {
        //   taskID: photoList,
        // });
        console.log("photolist", photoList);
        return <PhotoListItem key={taskID} list={photoList} state={state} />;
      });
    }
  });
  return <ul className="list_container">{renderedListContainer}</ul>;
};

export default PhotoList;
