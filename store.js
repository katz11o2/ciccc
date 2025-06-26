import { writable } from 'svelte/store';

// Create a writable store to hold the selected submission data
export const selectedSubmission = writable(null);
