import { AgoraVideoPlayer } from "agora-rtc-react"
import { Grid } from "@material-ui/core"
import { useState, useEffect } from "react"
import "./Conference.css";


export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);
console.log("++++++++++++TRACKS+++++++++++", tracks);


  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1))), 4);
  }, [users, tracks]);
console.log("?////////USERS///////", users)
  return (

    <Grid id="grid">

      <div style={{width: "30vw", height: "35vh", backgroundColor: "green"}}>
        {tracks && 
        <AgoraVideoPlayer
        videoTrack={tracks[1]}
        style={{ height: "100%", width: "100%" }}
        />
      }
      </div>
      
      {users.length > 0 && users.map((user) => {
        if (user.videoTrack) {
          return (
          
            <div  style={{width: "30vw", height: "35vh", backgroundColor: "red"}}>
              <AgoraVideoPlayer
                videoTrack={user.videoTrack}
                key={user.uid}
                style={{ height: "100%", width: "100%" }}
                />
                </div>
          
            );
          } else return null;
        })
        
      }
    </Grid>
  )
}