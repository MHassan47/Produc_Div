import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Chat.css";

const Chat = ({ state, setState }) => {
///submit function with axios call to link to routes add pro

  const created_at = new Date(create_timestamp);
  const createdDate = created_at.toLocaleDateString('en-US');
  const createdTime = created_at.toLocaleTimeString('en-US');


  return (
    <div className="Chat_container">
      <div className="chat_header">
        <Header state={state} />
      </div>
      <div className="chat_content">
      <div>{createdDate} at {createdTime}</div>
        <div className="chat_sidebar">
          <SideBar />
        </div>
        <div className="Chat">
          <Chat state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
