import { pad } from 'lodash';
import plugin from 'tailwindcss/plugin';

export const plugins = [
	plugin(({ addComponents, theme, addUtilities, addBase }) => {
		addComponents({
			'.btn-primary': {
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#1976d2',
				color: '#fff',
				fontSize: '14px',
				height: '33px',
				padding: '0 20px',
				margin: '0',
				cursor: 'pointer',
				border: 'none',
				transition: 'background-color 200ms',
				borderRadius: '4px',
			},
			'.btn-primary:hover': {
				backgroundColor: '#1265c2',
			},
		});
	}),
];
