import { atom } from 'nanostores';
import type { Song } from './types/songs';

export const $currentSong = atom<null | Song>(null)


