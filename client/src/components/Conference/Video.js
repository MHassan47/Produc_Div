import { AgoraVideoPlayer } from "agora-rtc-react"
import { Grid } from "@material-ui/core"
import { useState, useEffect } from "react"


export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);
console.log("++++++++++++TRACKS+++++++++++", tracks);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1))), 4);
  }, [users, tracks]);
console.log("?////////USERS///////", users)
  return (
    // <Grid container style={{ height: "100%" }}>
    <div style={{display: "flex"}}>

      {/* <Grid item xs={{ gridSpacing }}> */}
      <div style={{width: "50vw", height: "50vh", backgroundColor: "green"}}>
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
            
            // <Grid item style={{display: "flex"}}>
            <div style={{width: "50vw", height: "50vh", backgroundColor: "red"}}>
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
    {/* </Grid> */}
      </div>
  )
}