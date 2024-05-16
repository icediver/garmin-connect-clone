export const theme = {
	extend: {
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		gridTemplateColumns: {
			// Простая сетка из 16 столбцов
			'34': 'repeat(34, minmax(0, 1fr))',
		},
	},
};
