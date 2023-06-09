import {writable} from 'svelte/store'

export const showDarkModeStore = writable(true);
export const showSectionStore = writable(true);

export default {showDarkModeStore, showSectionStore};