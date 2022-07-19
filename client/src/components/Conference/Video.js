import { AgoraVideoPlayer } from "agora-rtc-react"
import { Grid } from "@material-ui/core"
import { useState, useEffect } from "react"
import "./Conference.css";


export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);
console.log("++++++++++++TRACKS+++++++++++", tracks);


// const obj = document.getElementById("conference_container");
// obj.style["background-color"] = "lightgray";
// obj.style["height"] ="100%";



  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1))), 4);
  }, [users, tracks]);
console.log("?////////USERS///////", users)
  return (
    // <div style={{display: "flex"}}>
    <Grid id="grid">

      {/* <Grid item style={{boarder: }}> */}
      <div style={{width: "30vw", height: "35vh", backgroundColor: "green"}}>
        {tracks && 
        <AgoraVideoPlayer
        videoTrack={tracks[1]}
        style={{ height: "100%", width: "100%" }}
        />
      }
      </div>
      {/* </Grid> */}
      {users.length > 0 && users.map((user) => {
        if (user.videoTrack) {
          return (
            
            // <Grid item style={{boarder: }}>
            <div  style={{width: "30vw", height: "35vh", backgroundColor: "red"}}>
              <AgoraVideoPlayer
                videoTrack={user.videoTrack}
                key={user.uid}
                style={{ height: "100%", width: "100%" }}
                />
                </div>
            //  </Grid>
            );
          } else return null;
        })
        
      }
      {/* <Grid item></Grid> */}
      {/* </div> */}
    </Grid>
  )
}