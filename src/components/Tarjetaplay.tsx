import React, { useRef } from 'react';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { MdReplay } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { $currentSong } from '../store';
import type { Song } from '../types/songs';

export default function () {

    const [song, setSong] = React.useState<null | Song>(null)

    const refAudio = useRef<null | HTMLAudioElement>(null)

    React.useEffect(function () {
        $currentSong.subscribe(function (state) {

            setSong(state)
        })
    }, [])

    function handlerPlay() {
        if (refAudio.current) {
            if (refAudio.current.paused) {
                refAudio.current.play()
            } else {
                refAudio.current.pause()
            }

        }
    }

    function handlerReplay() {
        if (refAudio.current) {
            refAudio.current.currentTime = refAudio.current.duration;
        }
    }
 
    return (
        <div className="flex flex-col items-center text-center gap-1">
            <div>
                <img src={song?.image.url} alt="" className="w-full h-64 object-cover rounded-4xl" />
            </div>

            <div>
                <h1 className="font-bold text-xl">{song?.title}</h1>
                <p>{song?.author}</p>
            </div>


            <audio src={song?.audio.url} autoPlay ref={refAudio}></audio>


            <div className="flex flex-row items-center gap-3.5 py-3.5">

                <button>< MdReplay onClick={handlerReplay} className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdSkipNext className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in -scale-100" /></button>
                <button><MdOutlinePlayCircleFilled onClick={handlerPlay} className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdSkipNext  className= "text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdOutlinePlaylistAdd className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>

            </div>
        </div>

    )
}







