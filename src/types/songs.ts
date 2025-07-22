export interface Song {
    playlist: any
    id: any
    _id: number
    title: string
    album: string
    author: string
    audio: File
    image: File
}

interface File {
    url:string
    id: string
    filename:string
}