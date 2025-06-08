import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);

  const closePLayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState ?'':'hide'}`} ref={player} onClick={closePLayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer

