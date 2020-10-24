import { writable } from "svelte/store";

export let page = writable("home");
export let showCookieBanner = writable(true);
