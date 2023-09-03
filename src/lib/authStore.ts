import { writable } from 'svelte/store';

export interface IAuthUser {
	email?: string;
	displayName?: string;
}
const authUser = writable<IAuthUser | undefined>(undefined);

export default authUser;
