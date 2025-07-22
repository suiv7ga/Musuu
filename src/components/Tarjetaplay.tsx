import React, { useRef, useState } from 'react';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { MdReplay } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { $currentSong } from '../store';
import type { Song } from '../types/songs';




export default function () {

    const [song, setSong] = React.useState<null | Song>(null)
    const refAudio = useRef<null | HTMLAudioElement>(null)
    const barra = React.useRef<HTMLInputElement | null>(null)
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
   
    


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

    function Progress(event: React.ChangeEvent<HTMLInputElement>) {
        if (refAudio.current) {
            setCurrentTime(Number(event.target.value));
        }
    }
    function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    React.useEffect(() => {
        const audio = refAudio.current;
        if (!audio) return;

        function updateBarra() {
            if (!audio) return;
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration || 0);

            const barra = document.querySelector<HTMLInputElement>('.barra');
            if (barra) {
                barra.max = audio.duration ? audio.duration.toString() : "0";
                barra.value = audio.currentTime.toString();
            }
        }

        audio.addEventListener('timeupdate', updateBarra);
        audio.addEventListener('loadedmetadata', updateBarra);

        return () => {
            audio.removeEventListener('timeupdate', updateBarra);
            audio.removeEventListener('loadedmetadata', updateBarra);
        };
    }, [song]);



    function handlerReplay() {
        if (refAudio.current) {
            refAudio.current.currentTime = refAudio.current.duration;
        }
    }

    const [currentSongIndex, setCurrentSongIndex] = useState(0);

  

    return (
        <div className="flex flex-col items-center text-center gap-3 ">
            <div>
                <img src={song?.image.url} alt="" className="w-full h-64 object-cover rounded-4xl outline-2 outline-offset-4 outline-purple-900/70" />
            </div>

            <div>
                <h1 className="font-bold text-xl">{song?.title}</h1>
                <p>{song?.author}</p>
            </div>


            <audio src={song?.audio.url} autoPlay ref={refAudio}></audio>
            <div className='flex flex-row justify-between gap-3'>
                <span>{formatTime(currentTime)}</span>
                <input type="range" className="h-6 w-fit appearance-none  bg-purple-300/90 rounded-lg outline-2 outline-purple-900/50" min={0} max={duration} value={currentTime} onChange={Progress} />
                <span>{formatTime(duration)}</span>
            </div>


            <div className="flex flex-row items-center gap-3.5 py-3.5">

                <button>< MdReplay onClick={handlerReplay} className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdSkipNext className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in -scale-100" /></button>
                <button><MdOutlinePlayCircleFilled onClick={handlerPlay} className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdSkipNext  className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>
                <button><MdOutlinePlaylistAdd className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" /></button>

            </div>
        </div>

    )
}







function setCurrentSongIndex(arg0: (prevIndex: any) => any) {
    throw new Error('Function not implemented.');
}

