import React from 'react'
import type { Song } from '../types/songs'
import { $currentSong } from '../store';
import { AiFillPlayCircle } from 'react-icons/ai';

interface Props {

   song: Song
}


export default function ({song}: Props) {

    function handlerClick(){

        console.log('Click en la cancion' + song.title);

        $currentSong.set(song);



    }

    return (


        <div
            className="flex flex-row items-center gap-14 bg-amber-50/40 grow object-cover justify-between rounded-full transition-all hover:-translate-y-1 hover:bg-violet-500/20 scale-100 duration-150 ease-in overflow-hidden"
        >
            <div>
                <img
                    src={song.image.url}
                    alt=""
                    className="w-full size-28 object-contain"
                /> 
            </div>
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-xl">{song.title}</h1>
                <p>{song.author}</p>
            </div>
            <div>
                <AiFillPlayCircle className="text-3xl text-violet-500 hover:text-violet-700 transition-all duration-150 ease-in" onClick={handlerClick} />
            </div>
        </div>




    )

}

