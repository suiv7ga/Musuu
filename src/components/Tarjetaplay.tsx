import React from 'react'
import type { Song } from '../types/songs'
import { $currentSong } from '../store';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { MdReplay } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdOutlinePlaylistAdd } from 'react-icons/md';


interface Props {

    song: Song
}


export default function ({ song }: Props) {

    function handlerClick() {

        console.log('Click en la cancion' + song.title);

        $currentSong.set(song);



    }

    return (

        <div className="flex flex-col items-center text-center gap-1">
            <div>
                <img src={song.image.url} alt="" className="w-full h-64 object-cover rounded-2xl" />
            </div>

            <div>
                <h1 className="font-bold text-xl">{song.title}</h1>
                <p>{song.author}</p>
            </div>

            <div className="flex flex-row gap-1">
                <span>0.00</span>
                <input type="range" id="music-bar" value="0" min="0" max="100" step="0.3" />
                <span>4:00</span>
            </div>

            <div className="flex flex-row items-center gap-3.5 py-3.5">

                < MdReplay className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" />
                <MdSkipNext className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in -scale-100" />
                <MdOutlinePlayCircleFilled onClick={handlerClick} className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" />
                <MdSkipNext className="text-6xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" />
                <MdOutlinePlaylistAdd className="text-4xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" />

            </div>
        </div>





    )

}

