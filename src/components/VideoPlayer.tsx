import { VideoPlayerType } from "@/types/VideoPlayerType";
import { useEffect, useRef } from "react";

export const VideoPlayer = ({src, isPlaying}: VideoPlayerType) =>{
  const videoTag = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(isPlaying){
      videoTag.current?.play();
    } else {
      videoTag.current?.pause();
    }
  })

  return(
    <video ref={videoTag} src={src} loop playsInline></video>
  )
}