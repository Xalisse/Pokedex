import { writable } from 'svelte/store';

export interface IAuthUser {
	id?: string;
	email?: string;
	displayName?: string;
	shinies: string[];
}
const authUser = writable<IAuthUser | undefined>(undefined);

export default authUser;
