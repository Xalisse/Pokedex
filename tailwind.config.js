/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bug: '#91C12E',
				'bug-light': '#F1F6E8',
				dark: '#5A5465',
				'dark-light': '#ECEBED',
				dragon: '#0A6CC3',
				'dragon-light': '#E4EEF6',
				electric: '#f4d23b',
				'electric-light': '#FBF8E9',
				fairy: '#ec8fe6',
				'fairy-light': '#FBF1FA',
				fighting: '#ce416b',
				'fighting-light': '#F8E9EE',
				fire: '#ff9d55',
				'fire-light': '#FCF3EB',
				flying: '#8fa9de',
				'flying-light': '#F1F4FA',
				ghost: '#5369ad',
				'ghost-light': '#EBEDF4',
				grass: '#63bc5b',
				'grass-light': '#EDF6EC',
				ground: '#d97845',
				'ground-light': '#F9EFEA',
				ice: '#73cec0',
				'ice-light': '#F1FBF9',
				normal: '#919aa2',
				'normal-light': '#F1F2F3',
				poison: '#AA6BC8',
				'poison-light': '#F5EDF8',
				psychic: '#fa7179',
				'psychic-light': '#FCEEEF',
				rock: '#c8b68c',
				'rock-light': '#F7F5F1',
				steel: '#5a8ea2',
				'steel-light': '#ECF1F3',
				water: '#5090d6',
				'water-light': '#EBF1F8'
			}
		}
	},
	plugins: []
};
