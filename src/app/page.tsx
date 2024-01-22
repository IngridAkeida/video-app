'use client'

import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";

const Page = () =>{

  const [ playing, setPlaying ] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-2xl text-gray-900 text-center bg-gradient-to-tl from-teal-400 via-blue-500 to-blue-600">
      <h1 className="font-bold">Video - App</h1>
      <div>
        <p className="text-white mb-3">{playing ? 'Playing' : 'Stopped'}</p>
        <button className="border border-blue-300 text-teal-200 p-3 bg-blue-950 rounded-md mb-3"
          onClick={()=>{setPlaying(!playing)}}>Play/Pause</button>
      </div>
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={playing}/>
      
    </div>
  )

}

export default Page;